import { connect } from 'react-redux';
import { loadCalls } from './call-list-actions';
import CallList from './call-list';

const dispatchToProps = {
	loadCalls,
}

const mapStateToProps = (state) => {
	console.log(state);
	const { isLoading, callsCollection } = state.call.list;
	const calls = (callsCollection || []);

	return {
		isLoading,
		calls,
	}
}

export default connect(mapStateToProps, dispatchToProps)(CallList)
