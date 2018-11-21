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
			startDate: action.data.startDate,
			endDate: action.data.endDate,
		};
	}

	if (isActionSetCurrentTime(action)) {
		return {
			...state,
			currentTime: action.data.date,
		};
	}

	return state;
};

export const getStartDate = (state: ReducerState) => (
	state.startDate ? new Date(state.startDate) : null
);

export const getEndDate = (state: ReducerState) => (
	state.endDate ? new Date(state.endDate) : null
);

export const getCurrentTime = (state: ReducerState) => (
	state.currentTime ? new Date(state.currentTime) : null
);

export const hasStartDate = (state: ReducerState) => (
	getStartDate(state) !== null
);

export const hasEndDate = (state: ReducerState) => (
	getEndDate(state) !== null
);

export const hasCurrentTime = (state: ReducerState) => (
	getEndDate(state) !== null
);

export const hasDateRange = (state: ReducerState) => (
	hasStartDate(state) && hasEndDate(state)
);

export default reducer;
