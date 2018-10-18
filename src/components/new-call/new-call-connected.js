import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { createCall } from './new-call-actions';
import NewCall from './new-call';

const onSubmit = (data, dispatch) => {
	dispatch(createCall(data));
}

const validate = (vaues) => {
	const erros = {}
	return erros;
}

const mapStateToProps = (state) => ({})

export default compose(
	connect(mapStateToProps),
	reduxForm({
		form: 'call-details',
		onSubmit,
		validate,
	})
)(NewCall)
