import types from '../../constants/types';

const initialState = {
	isLoading: false,
	calls: []
}

const callDetails = (state = initialState, action) => {
	switch (action.type) {
		case types('LOAD_CALL_DETAILS_START'): return {
			...state,
			isLoading: true
		}

		case types('LOAD_CALL_DETAILS_FINISH'): return {
			...state,
			isLoading: false
		}

		case types('SET_CALL_DETAILS'): return {
			...state,
			calls: action.payload,
		}
		default: return state
	}
}

export default callDetails
