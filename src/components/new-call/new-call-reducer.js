import types from '../../constants/types';

const initialState = {
	isLoading: false,
	calls: []
}

const callDetails = (state = initialState, action) => {
	switch (action.type) {
		case types('CREATE_CALL_START'): return {
			...state,
			isLoading: true
		}

		case types('CREATE_CALL_FINISH'): return {
			...state,
			isLoading: false
		}
		
		default: return state
	}
}

export default callDetails
