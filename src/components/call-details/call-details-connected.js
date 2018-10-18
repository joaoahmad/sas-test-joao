import { connect } from 'react-redux';
import { loadCallDetails } from './call-details-actions';
import CallDetails from './call-details';

const dispatchToProps = {
	loadCallDetails,
}

const mapStateToProps = (state) => {
	const { isLoading, call } = state.call.details;
	return {
		isLoading,
		call,
	}
}

export default connect(mapStateToProps, dispatchToProps)(CallDetails)
