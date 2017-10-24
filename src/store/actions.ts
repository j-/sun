import { Action, Dispatch } from 'redux';
import { ReducerState, getStartDate } from './index';

export interface Coords {
	latitude: number;
	longitude: number;
}

export interface ActionSetCoords extends Action {
	type: 'SetCoords';
	data: Coords;
}

export const isActionSetCoords = (action: Action): action is ActionSetCoords => (
	action.type === 'SetCoords'
);

export const setCoords = (coords: Coords): ActionSetCoords => ({
	type: 'SetCoords',
	data: coords,
});

export interface ActionSetCoordsError extends Action {
	type: 'SetCoordsError';
	data: {
		message: string;
	};
}

export const isActionSetCoordsError = (action: Action): action is ActionSetCoordsError => (
	action.type === 'SetCoordsError'
);

export const setCoordsError = (message: string): ActionSetCoordsError => ({
	type: 'SetCoordsError',
	data: { message },
});

export interface ActionFetchCoords extends Action {
	type: 'FetchCoords';
}

export const isActionFetchCoords = (action: Action): action is ActionFetchCoords => (
	action.type === 'FetchCoords'
);

export const fetchCoords = () => (dispatch: Dispatch<Action>) => {
	dispatch({ type: 'FetchCoords' });
	const successHandler = ({ coords }: { coords: Coords }) => {
		dispatch(setCoords(coords));
	};
	const errorHandler = (err: PositionError) => {
		dispatch(setCoordsError(err.message));
	};
	navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
};

export interface ActionSetDateRange extends Action {
	type: 'SetDateRange';
	data: {
		startDate: Date;
		endDate: Date;
	};
}

export const isActionSetDateRange = (action: Action): action is ActionSetDateRange => (
	action.type === 'SetDateRange'
);

export const setDateRange = (startDate: Date, endDate: Date): ActionSetDateRange => ({
	type: 'SetDateRange',
	data: {
		startDate,
		endDate,
	},
});

export const gotoToday = () => (dispatch: Dispatch<Action>) => {
	const now = new Date();

	const startDate = new Date(now);
	startDate.setHours(6);
	startDate.setMinutes(0);
	startDate.setSeconds(0);
	startDate.setMilliseconds(0);

	const endDate = new Date(now);
	endDate.setHours(20);
	endDate.setMinutes(0);
	endDate.setSeconds(0);
	endDate.setMilliseconds(0);

	dispatch(setDateRange(startDate, endDate));
};

export const gotoPrevDay = () => (dispatch: Dispatch<Action>, getState: () => ReducerState) => {
	const now = getStartDate(getState());
	if (!now) {
		return;
	}

	now.setDate(now.getDate() - 1);

	const startDate = new Date(now);
	startDate.setHours(6);
	startDate.setMinutes(0);
	startDate.setSeconds(0);
	startDate.setMilliseconds(0);

	const endDate = new Date(now);
	endDate.setHours(20);
	endDate.setMinutes(0);
	endDate.setSeconds(0);
	endDate.setMilliseconds(0);

	dispatch(setDateRange(startDate, endDate));
};

export const gotoNextDay = () => (dispatch: Dispatch<Action>, getState: () => ReducerState) => {
	const now = getStartDate(getState());
	if (!now) {
		return;
	}

	now.setDate(now.getDate() + 1);

	const startDate = new Date(now);
	startDate.setHours(6);
	startDate.setMinutes(0);
	startDate.setSeconds(0);
	startDate.setMilliseconds(0);

	const endDate = new Date(now);
	endDate.setHours(20);
	endDate.setMinutes(0);
	endDate.setSeconds(0);
	endDate.setMilliseconds(0);

	dispatch(setDateRange(startDate, endDate));
};

export interface ActionSetCurrentTime extends Action {
	type: 'SetCurrentTime';
	data: {
		date: Date;
	};
}

export const isActionSetCurrentTime = (action: Action): action is ActionSetCurrentTime => (
	action.type === 'SetCurrentTime'
);

export const setCurrentTime = (date: Date): ActionSetCurrentTime => ({
	type: 'SetCurrentTime',
	data: {
		date,
	},
});
