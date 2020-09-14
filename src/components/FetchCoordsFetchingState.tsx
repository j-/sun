import * as React from 'react';

export interface Props {

}

const FetchCoordsFetchingState: React.StatelessComponent<Props> = () => (
	<div className="FetchCoordsFetchingState alert alert-light" role="alert">
		<em>Locating&hellip;</em>
	</div>
);

export default FetchCoordsFetchingState;
