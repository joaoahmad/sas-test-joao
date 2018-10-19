// @flow
import types from '../../constants/types';

export const setOperatorName = (name: String) => ({
	type: types('SET_OPERATOR_NAME'),
	payload: name,
})
