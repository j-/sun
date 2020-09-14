import { Action, Dispatch } from 'redux';
import { Coords } from '../coords';

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

export interface ActionClearCoordsError extends Action {
	type: 'ClearCoordsError';
}

export const isActionClearCoordsError = (action: Action): action is ActionClearCoordsError => (
	action.type === 'ClearCoordsError'
);

export const clearCoordsError = (): ActionClearCoordsError => ({
	type: 'ClearCoordsError',
});

export interface ActionFetchCoords extends Action {
	type: 'FetchCoords';
}

export const isActionFetchCoords = (action: Action): action is ActionFetchCoords => (
	action.type === 'FetchCoords'
);

export const fetchCoords = () => (dispatch: Dispatch<ActionFetchCoords | ActionSetCoords | ActionSetCoordsError>) => {
	dispatch<ActionFetchCoords>({ type: 'FetchCoords' });
	const successHandler = ({ coords }: { coords: Coords }) => {
		dispatch<ActionSetCoords>(setCoords(coords));
	};
	const errorHandler = (err: PositionError) => {
		dispatch<ActionSetCoordsError>(setCoordsError(err.message));
	};
	navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
};
