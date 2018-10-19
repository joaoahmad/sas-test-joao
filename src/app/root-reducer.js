import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';
import callListReducer from '../components/call-list/call-list-reducer';
import callDetailsReducer from '../components/call-details/call-details-reducer';
import operatorReducer from '../components/operator-login/operator-login-reducer';

export default combineReducers({
	call: combineReducers({
		list: callListReducer,
		details: callDetailsReducer,
	}),
	form: formReducer,
	operator: operatorReducer,
})
