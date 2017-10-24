import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import DatePicker from '../components/DatePicker';
import { gotoPrevDay, gotoNextDay, gotoToday } from '../store/actions';

interface OwnProps {

}

interface StateProps {

}

interface DispatchProps {
	onClickPrev: () => void;
	onClickNext: () => void;
	onClickToday: () => void;
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps> = () => ({

});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = ({
	onClickPrev: gotoPrevDay,
	onClickNext: gotoNextDay,
	onClickToday: gotoToday,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DatePicker);
