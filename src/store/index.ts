import { combineReducers } from 'redux';
import * as coords from './reducer-coords';
import * as fetchCoords from './reducer-fetch-coords';
import * as dateRange from './reducer-date-range';

export interface ReducerState {
	coords: coords.ReducerState;
	fetchCoords: fetchCoords.ReducerState;
	dateRange: dateRange.ReducerState;
}

export default combineReducers<ReducerState>({
	coords: coords.default,
	fetchCoords: fetchCoords.default,
	dateRange: dateRange.default,
});

export const getLatitude = (state: ReducerState) => (
	coords.getLatitude(state.coords)
);

export const getLongitude = (state: ReducerState) => (
	coords.getLongitude(state.coords)
);

export const isNorth = (state: ReducerState) => (
	coords.isNorth(state.coords)
);

export const isEast = (state: ReducerState) => (
	coords.isEast(state.coords)
);

export const isSouth = (state: ReducerState) => (
	coords.isSouth(state.coords)
);

export const isWest = (state: ReducerState) => (
	coords.isWest(state.coords)
);

export const isFetching = (state: ReducerState) => (
	fetchCoords.isFetching(state.fetchCoords)
);

export const hasError = (state: ReducerState) => (
	fetchCoords.hasError(state.fetchCoords)
);

export const getErrorMessage = (state: ReducerState) => (
	fetchCoords.getErrorMessage(state.fetchCoords)
);

export const getStartDate = (state: ReducerState) => (
	dateRange.getStartDate(state.dateRange)
);

export const getEndDate = (state: ReducerState) => (
	dateRange.getEndDate(state.dateRange)
);

export const hasStartDate = (state: ReducerState) => (
	dateRange.hasStartDate(state.dateRange)
);

export const hasEndDate = (state: ReducerState) => (
	dateRange.hasEndDate(state.dateRange)
);

export const hasDateRange = (state: ReducerState) => (
	dateRange.hasDateRange(state.dateRange)
);

export const getCurrentTime = (state: ReducerState) => (
	dateRange.getCurrentTime(state.dateRange)
);
