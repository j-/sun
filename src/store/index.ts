import { combineReducers } from 'redux';
import * as coords from './reducer-coords';

export interface ReducerState {
  coords: coords.ReducerState;
}

export default combineReducers<ReducerState>({
  coords: coords.default,
});

export const getLatitude = (state: ReducerState): number => (
  coords.getLatitude(state.coords)
);

export const formatLatitude = (
  state: ReducerState,
  includeMinutes: boolean = true,
  includeSeconds: boolean = false,
): string => (
  coords.formatLatitude(state.coords, includeMinutes, includeSeconds)
);

export const getLongitude = (state: ReducerState): number => (
  coords.getLongitude(state.coords)
);

export const formatLongitude = (
  state: ReducerState,
  includeMinutes: boolean = true,
  includeSeconds: boolean = false,
): string => (
  coords.formatLongitude(state.coords, includeMinutes, includeSeconds)
);

export const formatCoordinates = (
  state: ReducerState,
  includeMinutes: boolean = true,
  includeSeconds: boolean = false,
): string => (
  coords.formatCoordinates(state.coords, includeMinutes, includeSeconds)
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
