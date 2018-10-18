// @flow
import types from '../../constants/types';
import logError from '../../utils/log-error';

export const loadCallDetails = (callId: String|Number) =>
async (dispatch: Function, getState: Function) => {
	dispatch({ type: types('LOAD_CALL_DETAILS_START') });

	try {
		const response = await fetch(`/api/calls/${callId}`);

		if (response.ok) {
			const payload = await response.json();
			dispatch({ type: types('SET_CALL_DETAILS'), payload });
		} else {
			logError(response.statusText);
		}
	} catch (error) {
		logError(error);
	}

	dispatch({ type: types('LOAD_CALL_DETAILS_FINISH') });
}
