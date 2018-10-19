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

const mapStateToProps = ({ operator: { operator_name } }) => ({
	initialValues: {
		operator: operator_name,
		reason: 'Dúvidas',
		type: 'Telefone',
		state: 'RJ',
	},
	operator_name,
});

export default compose(
	connect(mapStateToProps),
	reduxForm({
		form: 'call-details',
		enableReinitialize: true,
		onSubmit,
		validate,
	})
)(NewCall)
