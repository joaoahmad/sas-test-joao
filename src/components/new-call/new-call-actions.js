// @flow
import types from '../../constants/types';
import logError from '../../utils/log-error';

export const createCall = (data: Object) =>
async (dispatch: Function, getState: Function) => {
	dispatch({ type: types('CREATE_CALL_START') });

	try {
		const response = await fetch(`/api/calls`, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
		});

		if (response.ok) {
			const payload = await response.json();
			dispatch({ type: types('SET_NEW_CALL'), payload });
		} else {
			logError(response.statusText);
		}
	} catch (error) {
		logError(error);
	}

	dispatch({ type: types('CREATE_NEW_CALL_FINISH') });
}
