import types from '../../constants/types';

const initialState = {
	isLoading: false,
	calls: []
}

const callsCollection = (state = initialState, action) => {
	switch (action.type) {
		case types('LOAD_CALLS_START'): return {
			...state,
			isLoading: true
		}

		case types('LOAD_CALLS_FINISH'): return {
			...state,
			isLoading: false
		}

		case types('SET_CALLS'): return {
			...state,
			callsCollection: action.payload,
		}

		case types('SET_NEW_CALL'): return {
			...state,
			callsCollection: [
				...state.callsCollection,
				action.payload,
			],
		}

		default: return state
	}
}

export default callsCollection;
