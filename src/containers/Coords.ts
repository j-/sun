import { connect } from 'react-redux';
import Coords from '../components/Coords';
import { RootReducerState, getLatitude, getLongitude } from '../store';

interface StateProps {
	latitude: number;
	longitude: number;
}

const mapStateToProps = (state: RootReducerState): StateProps => ({
	latitude: getLatitude(state),
	longitude: getLongitude(state),
});

export default connect<StateProps>(
	mapStateToProps
)(Coords);
