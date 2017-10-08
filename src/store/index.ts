import { combineReducers } from 'redux';
import * as coords from './reducer-coords';
import * as fetchCoords from './reducer-fetch-coords';

export interface ReducerState {
	coords: coords.ReducerState;
	fetchCoords: fetchCoords.ReducerState;
}

export default combineReducers<ReducerState>({
	coords: coords.default,
	fetchCoords: fetchCoords.default,
});

export const getLatitude = (state: ReducerState): number => (
	coords.getLatitude(state.coords)
);

export const getLongitude = (state: ReducerState): number => (
	coords.getLongitude(state.coords)
);

export const isNorth = (state: ReducerState): boolean => (
	coords.isNorth(state.coords)
);

export const isEast = (state: ReducerState): boolean => (
	coords.isEast(state.coords)
);

export const isSouth = (state: ReducerState): boolean => (
	coords.isSouth(state.coords)
);

export const isWest = (state: ReducerState): boolean => (
	coords.isWest(state.coords)
);

export const isFetching = (state: ReducerState): boolean => (
	fetchCoords.isFetching(state.fetchCoords)
);

export const hasError = (state: ReducerState): boolean => (
	fetchCoords.hasError(state.fetchCoords)
);

export const getErrorMessage = (state: ReducerState): string | null => (
	fetchCoords.getErrorMessage(state.fetchCoords)
);
