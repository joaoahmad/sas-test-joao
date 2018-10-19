import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { setOperatorName } from './operator-login-actions';
import OperatorLogin from './operator-login';

const onSubmit = (data, dispatch) => {
	dispatch(setOperatorName(data && data.operator_name));
}

const validate = (vaues) => {
	const erros = {};

	return erros;
}

const dispatchToProps = { setOperatorName };

const mapStateToProps = ({ operator: { operator_name } }) => ({ operator_name });

export default compose(
	connect(mapStateToProps, dispatchToProps),
	reduxForm({
		form: 'operator-login',
		onSubmit,
		validate,
	})
)(OperatorLogin)
