import { connect, MapStateToProps } from 'react-redux';
import CurrentDate from '../components/CurrentDate';
import { ReducerState, getStartDate } from '../store';

interface OwnProps {

}

interface StateProps {
	value?: Date | null;
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps> = (state: ReducerState) => ({
	value: getStartDate(state),
});

export default connect(
	mapStateToProps
)(CurrentDate);
