import { combineReducers } from 'redux';
import * as coords from './reducer-coords';
import * as fetchCoords from './reducer-fetch-coords';
import * as dateRange from './reducer-date-range';

export interface RootReducerState {
	coords: coords.ReducerState;
	fetchCoords: fetchCoords.ReducerState;
	dateRange: dateRange.ReducerState;
}

export default combineReducers<RootReducerState>({
	coords: coords.default,
	fetchCoords: fetchCoords.default,
	dateRange: dateRange.default,
});

export const getLatitude = (state: RootReducerState) => (
	coords.getLatitude(state.coords)
);

export const getLongitude = (state: RootReducerState) => (
	coords.getLongitude(state.coords)
);

export const isNorth = (state: RootReducerState) => (
	coords.isNorth(state.coords)
);

export const isEast = (state: RootReducerState) => (
	coords.isEast(state.coords)
);

export const isSouth = (state: RootReducerState) => (
	coords.isSouth(state.coords)
);

export const isWest = (state: RootReducerState) => (
	coords.isWest(state.coords)
);

export const isFetching = (state: RootReducerState) => (
	fetchCoords.isFetching(state.fetchCoords)
);

export const hasError = (state: RootReducerState) => (
	fetchCoords.hasError(state.fetchCoords)
);

export const getErrorMessage = (state: RootReducerState) => (
	fetchCoords.getErrorMessage(state.fetchCoords)
);

export const getStartDate = (state: RootReducerState) => (
	dateRange.getStartDate(state.dateRange)
);

export const getEndDate = (state: RootReducerState) => (
	dateRange.getEndDate(state.dateRange)
);

export const hasStartDate = (state: RootReducerState) => (
	dateRange.hasStartDate(state.dateRange)
);

export const hasEndDate = (state: RootReducerState) => (
	dateRange.hasEndDate(state.dateRange)
);

export const hasDateRange = (state: RootReducerState) => (
	dateRange.hasDateRange(state.dateRange)
);

export const getCurrentTime = (state: RootReducerState) => (
	dateRange.getCurrentTime(state.dateRange)
);
