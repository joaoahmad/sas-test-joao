import { connect } from 'react-redux';
import { loadCalls } from './call-list-actions';
import moment from 'moment';
import CallList from './call-list';

const dispatchToProps = {
	loadCalls,
}

const mapStateToProps = (state) => {
	const { isLoading, callsCollection } = state.call.list;
	const calls = (callsCollection || [])
	.sort((a, b) => (new Date(b.created_at) - new Date(a.created_at)))
	.reduce((acc, cur) => {
		const date = moment(cur.created_at).format('DD/MM/YYYY');
		const key = `${date} - ${cur.state}`;
		if (!(key in acc)) {
			acc[key] = [];
		}

		acc[key].push(cur);

		return acc;
	}, {});

	return {
		isLoading,
		calls,
	}
}

export default connect(mapStateToProps, dispatchToProps)(CallList)
