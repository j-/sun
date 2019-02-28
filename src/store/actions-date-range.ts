import { Action, Dispatch } from 'redux';
import { RootReducerState, getStartDate } from './index';

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
	startDate.setHours(6);
	startDate.setMinutes(0);
	startDate.setSeconds(0);
	startDate.setMilliseconds(0);

	const endDate = new Date(now);
	endDate.setHours(20);
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
	startDate.setHours(6);
	startDate.setMinutes(0);
	startDate.setSeconds(0);
	startDate.setMilliseconds(0);

	const endDate = new Date(now);
	endDate.setHours(20);
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
	startDate.setHours(6);
	startDate.setMinutes(0);
	startDate.setSeconds(0);
	startDate.setMilliseconds(0);

	const endDate = new Date(now);
	endDate.setHours(20);
	endDate.setMinutes(0);
	endDate.setSeconds(0);
	endDate.setMilliseconds(0);

	dispatch<ActionSetDateRange>(setDateRange(startDate, endDate));
};
