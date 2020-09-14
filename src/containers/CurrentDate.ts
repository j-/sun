import { connect, MapStateToProps } from 'react-redux';
import CurrentDate from '../components/CurrentDate';
import { RootReducerState, getStartDate } from '../store';

interface OwnProps {

}

interface StateProps {
	value?: Date | null;
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps, RootReducerState> = (state) => ({
	value: getStartDate(state),
});

export default connect(
	mapStateToProps
)(CurrentDate);
