import { Reducer } from 'redux';

import {
	isActionSetCoords,
	isActionFetchCoords,
	isActionSetCoordsError,
} from './actions';
import { isActionClearCoordsError } from './actions-coords';

export interface ReducerState {
	latitude: number;
	longitude: number;
	isLocated: boolean;
	isFetching: boolean;
	errorMessage: string | null;
}

const DEFAULT_STATE: ReducerState = {
	latitude: 0,
	longitude: 0,
	isLocated: false,
	isFetching: false,
	errorMessage: null,
};

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
	if (isActionSetCoords(action)) {
		return {
			...state,
			latitude: action.data.latitude,
			longitude: action.data.longitude,
			isLocated: true,
			isFetching: false,
			errorMessage: null,
		};
	}

	if (isActionFetchCoords(action)) {
		return {
			...state,
			isLocated: false,
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

	if (isActionClearCoordsError(action)) {
		return {
			...state,
			errorMessage: null,
		};
	}

	return state;
};

export const getLatitude = (state: ReducerState) => (
	state.latitude
);

export const getLongitude = (state: ReducerState) => (
	state.longitude
);

export const isLocated = (state: ReducerState) => (
	state.isLocated
);

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
