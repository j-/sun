import { Action } from 'redux';

export interface Coords {
  latitude: number;
  longitude: number;
}

export interface ActionSetCoords {
  type: 'SetCoords';
  data: Coords;
}

export const isActionSetCoords = (action: Action): action is ActionSetCoords => (
  action.type === 'SetCoods'
);

export const setCoords = (coords: Coords): ActionSetCoords => ({
  type: 'SetCoords',
  data: coords,
});
