import { Reducer } from 'redux';
import { isActionSetDateRange } from './actions';

export interface ReducerState {
	startDate: Date | null;
	endDate: Date | null;
}

const DEFAULT_STATE: ReducerState = {
	startDate: null,
	endDate: null,
};

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
	if (isActionSetDateRange(action)) {
		return {
			...state,
			startDate: action.data.startDate,
			endDate: action.data.endDate,
		};
	}

	return state;
};

export const getStartDate = (state: ReducerState): Date | null => (
	state.startDate
);

export const getEndDate = (state: ReducerState): Date | null => (
	state.endDate
);

export const hasStartDate = (state: ReducerState): boolean => (
	getStartDate(state) !== null
);

export const hasEndDate = (state: ReducerState): boolean => (
	getEndDate(state) !== null
);

export const hasDateRange = (state: ReducerState): boolean => (
	hasStartDate(state) && hasEndDate(state)
);

export default reducer;
