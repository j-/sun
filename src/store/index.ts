import { combineReducers } from 'redux';
import * as suncalc from 'suncalc';
import * as coords from './reducer-coords';
import * as fetchCoords from './reducer-fetch-coords';
import * as dateRange from './reducer-date-range';
import * as times from './reducer-times';

import {
	isNorth as isLatitudeNorth,
	isEast as isLongitudeEast,
	isSouth as isLatitudeSouth,
	isWest as isLongitudeWest,
} from '../coords';

export interface RootReducerState {
	coords: coords.ReducerState;
	fetchCoords: fetchCoords.ReducerState;
	dateRange: dateRange.ReducerState;
	times: times.ReducerState;
}

export default combineReducers<RootReducerState>({
	coords: coords.default,
	fetchCoords: fetchCoords.default,
	dateRange: dateRange.default,
	times: times.default,
});

export const getLatitude = (state: RootReducerState) => (
	coords.getLatitude(state.coords)
);

export const getLongitude = (state: RootReducerState) => (
	coords.getLongitude(state.coords)
);

export const isNorth = (state: RootReducerState) => (
	isLatitudeNorth(getLatitude(state))
);

export const isEast = (state: RootReducerState) => (
	isLongitudeEast(getLongitude(state))
);

export const isSouth = (state: RootReducerState) => (
	isLatitudeSouth(getLatitude(state))
);

export const isWest = (state: RootReducerState) => (
	isLongitudeWest(getLongitude(state))
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

export const getSunriseStartTime = (state: RootReducerState) => (
	times.getSunriseStartTime(state.times)
);

export const getSunriseEndTime = (state: RootReducerState) => (
	times.getSunriseEndTime(state.times)
);

export const getSunsetStartTime = (state: RootReducerState) => (
	times.getSunsetStartTime(state.times)
);

export const getSunsetEndTime = (state: RootReducerState) => (
	times.getSunsetEndTime(state.times)
);

export const getUVBStartTime = (state: RootReducerState) => (
	times.getUVBStartTime(state.times)
);

export const getUVBEndTime = (state: RootReducerState) => (
	times.getUVBEndTime(state.times)
);

export const isUVBPenetrating = (state: RootReducerState, time: Date) => {
	times.isUVBPenetrating(state.times, time)
};

export const getCurrentAngle = (state: RootReducerState) => (
	getCurrentTime(state) === null ? null : suncalc.getPosition(
		getCurrentTime(state)!,
		getLatitude(state),
		getLongitude(state)
	).altitude
);
