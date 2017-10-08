import { Reducer } from 'redux';
import { isActionSetCoords } from './actions';

export interface ReducerState {
  latitude: number;
  longitude: number;
}

const DEFAULT_STATE: ReducerState = {
  latitude: 0,
  longitude: 0,
};

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
  if (isActionSetCoords(action)) {
    return {
      ...state,
      latitude: action.data.latitude,
      longitude: action.data.longitude,
    };
  }

  return state;
};

const formatDegrees = (
  degrees: number,
  includeMinutes: boolean = true,
  includeSeconds: boolean = false,
): string => {
  if (!includeMinutes) {
    return `${Math.round(degrees)}\xb0`;
  } else if (!includeSeconds) {
    const minutes = (degrees % 1) * 60;
    return `${Math.floor(degrees)}\xb0 ${Math.round(minutes)}'`;
  } else {
    const minutes = (degrees % 1) * 60;
    const seconds = ((degrees * 60) % 1) * 60;
    return `${Math.floor(degrees)}\xb0 ${Math.floor(minutes)}' ${Math.round(seconds)}"`;
  }
};

export const getLatitude = (state: ReducerState): number => (
  state.latitude
);

export const formatLatitude = (
  state: ReducerState,
  includeMinutes: boolean = true,
  includeSeconds: boolean = false,
): string => (
  formatDegrees(
    getLatitude(state),
    includeMinutes,
    includeSeconds,
  ) + ' ' + (isNorth(state) ? 'N' : 'S')
);

export const getLongitude = (state: ReducerState): number => (
  state.longitude
);

export const formatLongitude = (
  state: ReducerState,
  includeMinutes: boolean = true,
  includeSeconds: boolean = false,
): string => (
  formatDegrees(
    getLongitude(state),
    includeMinutes,
    includeSeconds,
  ) + ' ' + (isEast(state) ? 'E' : 'W')
);

export const formatCoordinates = (
  state: ReducerState,
  includeMinutes: boolean = true,
  includeSeconds: boolean = false,
): string => (
  formatLatitude(state, includeMinutes, includeSeconds) + ' ' +
  formatLongitude(state, includeMinutes, includeSeconds)
);

export const isNorth = (state: ReducerState): boolean => (
  getLatitude(state) >= 0
);

export const isEast = (state: ReducerState): boolean => (
  getLongitude(state) >= 0
);

export const isSouth = (state: ReducerState): boolean => (
  getLatitude(state) < 0
);

export const isWest = (state: ReducerState): boolean => (
  getLongitude(state) > 0
);

export default reducer;
