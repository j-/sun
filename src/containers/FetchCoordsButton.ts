import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import FetchCoordsButton from '../components/FetchCoordsButton';
import { fetchCoords } from '../store/actions';

interface OwnProps {

}

interface StateProps {

}

interface DispatchProps {
	onClick: () => void;
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps> = () => ({

});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = ({
	onClick: fetchCoords,
});

const mergeProps = (stateProps: StateProps, dispatchProps: DispatchProps) => (
	Object.assign({}, stateProps, dispatchProps)
);

export default connect<StateProps, DispatchProps, OwnProps>(
	mapStateToProps,
	mapDispatchToProps,
	mergeProps
)(FetchCoordsButton);
