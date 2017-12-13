import { Reducer } from 'redux';
import { isActionSetDateRange, isActionSetCurrentTime } from './actions';

export interface ReducerState {
	startDate: string | null;
	endDate: string | null;
	currentTime: string | null;
}

const DEFAULT_STATE: ReducerState = {
	startDate: null,
	endDate: null,
	currentTime: null,
};

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
	if (isActionSetDateRange(action)) {
		return {
			...state,
			startDate: action.data.startDate.toISOString(),
			endDate: action.data.endDate.toISOString(),
		};
	}
	if (isActionSetCurrentTime(action)) {
		return {
			...state,
			currentTime: action.data.date.toISOString(),
		};
	}

	return state;
};

export const getStartDate = (state: ReducerState): Date | null => (
	state.startDate ? new Date(state.startDate) : null
);

export const getEndDate = (state: ReducerState): Date | null => (
	state.endDate ? new Date(state.endDate) : null
);

export const getCurrentTime = (state: ReducerState): Date | null => (
	state.currentTime ? new Date(state.currentTime) : null
);

export const hasStartDate = (state: ReducerState): boolean => (
	getStartDate(state) !== null
);

export const hasEndDate = (state: ReducerState): boolean => (
	getEndDate(state) !== null
);

export const hasCurrentTime = (state: ReducerState): boolean => (
	getEndDate(state) !== null
);

export const hasDateRange = (state: ReducerState): boolean => (
	hasStartDate(state) && hasEndDate(state)
);

export default reducer;
