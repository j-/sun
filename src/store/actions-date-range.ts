import { Action, Dispatch } from 'redux';
import { RootReducerState, getStartDate } from './index';

const HOUR_DAY_START = 6;
const HOUR_DAY_END = 20;

export interface ActionSetDateRange extends Action {
	type: 'SetDateRange';
	data: {
		startDate: string;
		endDate: string;
	};
}

export const isActionSetDateRange = (action: Action): action is ActionSetDateRange => (
	action.type === 'SetDateRange'
);

export const setDateRange = (startDate: Date, endDate: Date): ActionSetDateRange => ({
	type: 'SetDateRange',
	data: {
		startDate: startDate.toISOString(),
		endDate: endDate.toISOString(),
	},
});

export const gotoToday = () => (dispatch: Dispatch<ActionSetDateRange>) => {
	const now = new Date();

	const startDate = new Date(now);
	startDate.setHours(HOUR_DAY_START);
	startDate.setMinutes(0);
	startDate.setSeconds(0);
	startDate.setMilliseconds(0);

	const endDate = new Date(now);
	endDate.setHours(HOUR_DAY_END);
	endDate.setMinutes(0);
	endDate.setSeconds(0);
	endDate.setMilliseconds(0);

	dispatch<ActionSetDateRange>(setDateRange(startDate, endDate));
};

export const gotoPrevDay = () => (dispatch: Dispatch<ActionSetDateRange>, getState: () => RootReducerState) => {
	const now = getStartDate(getState());
	if (!now) {
		return;
	}

	now.setDate(now.getDate() - 1);

	const startDate = new Date(now);
	startDate.setHours(HOUR_DAY_START);
	startDate.setMinutes(0);
	startDate.setSeconds(0);
	startDate.setMilliseconds(0);

	const endDate = new Date(now);
	endDate.setHours(HOUR_DAY_END);
	endDate.setMinutes(0);
	endDate.setSeconds(0);
	endDate.setMilliseconds(0);

	dispatch<ActionSetDateRange>(setDateRange(startDate, endDate));
};

export const gotoNextDay = () => (dispatch: Dispatch<ActionSetDateRange>, getState: () => RootReducerState) => {
	const now = getStartDate(getState());
	if (!now) {
		return;
	}

	now.setDate(now.getDate() + 1);

	const startDate = new Date(now);
	startDate.setHours(HOUR_DAY_START);
	startDate.setMinutes(0);
	startDate.setSeconds(0);
	startDate.setMilliseconds(0);

	const endDate = new Date(now);
	endDate.setHours(HOUR_DAY_END);
	endDate.setMinutes(0);
	endDate.setSeconds(0);
	endDate.setMilliseconds(0);

	dispatch<ActionSetDateRange>(setDateRange(startDate, endDate));
};
