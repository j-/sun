import { Action } from 'redux';

export interface ActionSetCurrentTime extends Action {
	type: 'SetCurrentTime';
	data: {
		date: string;
	};
}

export const isActionSetCurrentTime = (action: Action): action is ActionSetCurrentTime => (
	action.type === 'SetCurrentTime'
);

export const setCurrentTime = (date: Date): ActionSetCurrentTime => ({
	type: 'SetCurrentTime',
	data: {
		date: date.toISOString(),
	},
});
