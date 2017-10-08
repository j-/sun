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

export const getStartDate = (state: ReducerState): Date | null => (
	dateRange.getStartDate(state.dateRange)
);

export const getEndDate = (state: ReducerState): Date | null => (
	dateRange.getEndDate(state.dateRange)
);

export const hasStartDate = (state: ReducerState): boolean => (
	dateRange.hasStartDate(state.dateRange)
);

export const hasEndDate = (state: ReducerState): boolean => (
	dateRange.hasEndDate(state.dateRange)
);

export const hasDateRange = (state: ReducerState): boolean => (
	dateRange.hasDateRange(state.dateRange)
);
