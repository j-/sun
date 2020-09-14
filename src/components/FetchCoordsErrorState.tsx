import * as React from 'react';
import ClearCoordsErrorButton from '../containers/ClearCoordsErrorButton';

export interface Props {
	errorMessage: string;
}

const FetchCoordsErrorState: React.StatelessComponent<Props> = ({
	errorMessage,
}) => (
	<div className="FetchCoordsErrorState alert alert-danger" role="alert">
		<span>Error: {errorMessage}</span>
		<ClearCoordsErrorButton className="close" aria-label="Close">
			<span aria-hidden="true">&times;</span>
		</ClearCoordsErrorButton>
	</div>
);

export default FetchCoordsErrorState;
