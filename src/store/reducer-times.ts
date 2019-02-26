import { Reducer } from 'redux';
import * as suncalc from 'suncalc';

import {
	isActionSetCoords,
	isActionSetDateRange,
} from './actions';

suncalc.addTime(50, 'uvbStart', 'uvbEnd');

export interface ReducerState {
	date: string | null;
	latitude: number | null;
	longitude: number | null;
	sunriseStart: string | null;
	sunriseEnd: string | null;
	sunsetStart: string | null;
	sunsetEnd: string | null;
	uvbStart: string | null;
	uvbEnd: string | null;
}

const DEFAULT_STATE: ReducerState = {
	date: null,
	latitude: null,
	longitude: null,
	sunriseStart: null,
	sunriseEnd: null,
	sunsetStart: null,
	sunsetEnd: null,
	uvbStart: null,
	uvbEnd: null,
};

const updateTimes = (state: ReducerState): ReducerState => {
	const { date, latitude, longitude } = state;
	if (date === null || latitude === null || longitude === null) {
		return state;
	}
	const times = suncalc.getTimes(new Date(date), latitude, longitude);
	return {
		...state,
		/* tslint:disable:no-string-literal */
		sunriseStart: isNaN(times.sunrise.getTime()) ? null : times.sunrise.toISOString(),
		sunriseEnd: isNaN(times.sunriseEnd.getTime()) ? null : times.sunriseEnd.toISOString(),
		sunsetStart: isNaN(times.sunsetStart.getTime()) ? null : times.sunsetStart.toISOString(),
		sunsetEnd: isNaN(times.sunset.getTime()) ? null : times.sunset.toISOString(),
		uvbStart: isNaN(times['uvbStart'].getTime()) ? null : times['uvbStart'].toISOString(),
		uvbEnd: isNaN(times['uvbEnd'].getTime()) ? null : times['uvbEnd'].toISOString(),
		/* tslint:enable:no-string-literal */
	};
};

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
	if (isActionSetCoords(action)) {
		const newState = {
			...state,
			latitude: action.data.latitude,
			longitude: action.data.longitude,
		};
		return updateTimes(newState);
	}

	if (isActionSetDateRange(action)) {
		const newState = {
			...state,
			date: action.data.startDate,
		};
		return updateTimes(newState);
	}

	return state;
};

export default reducer;

export const getCurrentLatitude = (state: ReducerState) => (
	state.latitude
);

export const getCurrentLongitude = (state: ReducerState) => (
	state.longitude
);

export const getSunriseStartTime = (state: ReducerState) => (
	state.sunriseStart ? new Date(state.sunriseStart) : null
);

export const getSunriseEndTime = (state: ReducerState) => (
	state.sunriseEnd ? new Date(state.sunriseEnd) : null
);

export const getSunsetStartTime = (state: ReducerState) => (
	state.sunsetStart ? new Date(state.sunsetStart) : null
);

export const getSunsetEndTime = (state: ReducerState) => (
	state.sunsetEnd ? new Date(state.sunsetEnd) : null
);

export const getUVBStartTime = (state: ReducerState) => (
	state.uvbStart ? new Date(state.uvbStart) : null
);

export const getUVBEndTime = (state: ReducerState) => (
	state.uvbEnd ? new Date(state.uvbEnd) : null
);

export const isUVBPenetrating = (state: ReducerState, time: Date) => {
	const startTime = getUVBStartTime(state);
	const endTime = getUVBEndTime(state);
	if (startTime === null || endTime === null) {
		return null;
	}
	return time >= startTime && time <= endTime;
};
