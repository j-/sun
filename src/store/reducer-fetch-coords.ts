import { Reducer } from 'redux';
import { isActionSetCoords, isActionFetchCoords, isActionSetCoordsError } from './actions';

export interface ReducerState {
	isFetching: boolean;
	errorMessage: string | null;
}

const DEFAULT_STATE: ReducerState = {
	isFetching: false,
	errorMessage: null,
};

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
	if (isActionSetCoords(action)) {
		return {
			...state,
			isFetching: false,
			errorMessage: null,
		};
	}

	if (isActionFetchCoords(action)) {
		return {
			...state,
			isFetching: true,
			errorMessage: null,
		};
	}

	if (isActionSetCoordsError(action)) {
		return {
			...state,
			isFetching: false,
			errorMessage: action.data.message,
		};
	}

	return state;
};

export const isFetching = (state: ReducerState) => (
	state.isFetching
);

export const hasError = (state: ReducerState) => (
	state.errorMessage !== null
);

export const getErrorMessage = (state: ReducerState) => (
	state.errorMessage
);

export default reducer;
