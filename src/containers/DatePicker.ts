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

const mapStateToProps: MapStateToProps<StateProps, OwnProps> = (state: ReducerState): StateProps => {
	const currentTime = getCurrentTime(state);
	const startDate = getStartDate(state);
	const endDate = getEndDate(state);
	return {
		isToday: currentTime && startDate && endDate && (currentTime > startDate) && (currentTime < endDate),
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
