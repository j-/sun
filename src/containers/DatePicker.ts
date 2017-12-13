import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import DatePicker from '../components/DatePicker';
import { ReducerState, getCurrentTime, getStartDate, getEndDate } from '../store';
import { gotoPrevDay, gotoNextDay, gotoToday } from '../store/actions';

interface OwnProps {

}

interface StateProps {
	isToday: boolean | null;
}

interface DispatchProps {
	onClickPrev: () => void;
	onClickNext: () => void;
	onClickToday: () => void;
}

const getMidnightBefore = (input: Date): Date => {
	const output = new Date(input);
	output.setHours(0);
	output.setMinutes(0);
	output.setSeconds(0);
	output.setMilliseconds(0);
	return output;
};

const getMidnightAfter = (input: Date): Date => {
	const output = getMidnightBefore(input);
	output.setDate(output.getDate() + 1);
	return output;
};

const mapStateToProps: MapStateToProps<StateProps, OwnProps> = (state: ReducerState): StateProps => {
	const currentTime = getCurrentTime(state);
	const startDate = getStartDate(state);
	const endDate = getEndDate(state);
	if (!currentTime || !startDate || !endDate) {
		return {
			isToday: null,
		};
	}
	const startDateMorning = getMidnightBefore(startDate);
	const endDateEvening = getMidnightAfter(endDate);
	return {
		isToday: (currentTime > startDateMorning) && (currentTime < endDateEvening),
	};
};

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = ({
	onClickPrev: gotoPrevDay,
	onClickNext: gotoNextDay,
	onClickToday: gotoToday,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DatePicker);
