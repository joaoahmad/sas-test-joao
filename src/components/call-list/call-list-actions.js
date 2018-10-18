// @flow
import types from '../../constants/types';
import logError from '../../utils/log-error';

export const loadCalls = () =>
async (dispatch: Function, getState: Function) => {
	dispatch({ type: types('LOAD_CALLS_START') });

	try {
		const response = await fetch('/api/calls');

		if (response.ok) {
			const payload = await response.json();
			dispatch({ type: types('SET_CALLS'), payload });
		} else {
			logError(response.statusText);
		}
	} catch (error) {
		logError(error);
	}

	dispatch({ type: types('LOAD_CALLS_FINISH') });
}
