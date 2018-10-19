import types from '../../constants/types';

const initialState = {
	operator_name: null,
}

const operator = (state = initialState, action) => {
	switch (action.type) {
		case types('SET_OPERATOR_NAME'): return {
			...state,
			operator_name: action.payload,
		}

		default: return state
	}
}

export default operator;
