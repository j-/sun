import { connect, MapDispatchToProps } from 'react-redux';
import Button from '../components/Button';
import { clearCoordsError } from '../store/actions';

interface DispatchProps {
	onClick: () => void;
}

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = ({
	onClick: clearCoordsError,
});

export default connect<{}, DispatchProps, {}>(
	null,
	mapDispatchToProps,
)(Button);
