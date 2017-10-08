import { Dispatch, Action } from 'redux';
import { connect } from 'react-redux';
import FetchCoordsButton from '../components/FetchCoordsButton';
import { fetchCoords } from '../store/actions';

interface StateProps {

}

interface DispatchProps {
	onClick: () => void;
}

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
	onClick: () => dispatch(fetchCoords(dispatch)),
});

const mergeProps = (stateProps: StateProps, dispatchProps: DispatchProps) => (
	Object.assign({}, stateProps, dispatchProps)
);

export default connect<StateProps, DispatchProps>(
	mapStateToProps,
	mapDispatchToProps,
	mergeProps
)(FetchCoordsButton);
