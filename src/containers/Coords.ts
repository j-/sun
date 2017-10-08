import { connect } from 'react-redux';
import Coords from '../components/Coords';
import { ReducerState, getLatitude, getLongitude } from '../store';

interface StateProps {
	latitude: number;
	longitude: number;
}

const mapStateToProps = (state: ReducerState): StateProps => ({
	latitude: getLatitude(state),
	longitude: getLongitude(state),
});

export default connect<StateProps>(
	mapStateToProps
)(Coords);
