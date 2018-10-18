import { connect } from 'react-redux';
import { loadCalls } from './call-list-actions';
import CallList from './call-list';

const dispatchToProps = {
	loadCalls,
}

const mapStateToProps = (state) => {
	const { isLoading, callsCollection } = state.call.list;
	const calls = (callsCollection || [])
	.sort((a, b) => (new Date(b.created_at) - new Date(a.created_at)));

	console.log(calls);

	return {
		isLoading,
		calls,
	}
}

export default connect(mapStateToProps, dispatchToProps)(CallList)
