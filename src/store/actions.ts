import { Action, Dispatch } from 'redux';

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

export const fetchCoords = (dispatch: Dispatch<Action>) => () => {
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
