import { Reducer } from 'redux';
import { isActionSetCoords } from './actions';

export interface ReducerState {
	latitude: number;
	longitude: number;
}

const DEFAULT_STATE: ReducerState = {
	latitude: 0,
	longitude: 0,
};

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
	if (isActionSetCoords(action)) {
		return {
			...state,
			latitude: action.data.latitude,
			longitude: action.data.longitude,
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

export const isNorth = (state: ReducerState) => (
	getLatitude(state) >= 0
);

export const isEast = (state: ReducerState) => (
	getLongitude(state) >= 0
);

export const isSouth = (state: ReducerState) => (
	getLatitude(state) < 0
);

export const isWest = (state: ReducerState) => (
	getLongitude(state) > 0
);

export default reducer;
