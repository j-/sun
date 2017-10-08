import * as React from 'react';

export interface Props {
	isFetching: boolean;
	hasError: boolean;
	errorMessage: string | null;
}

export default class FetchCoordsState extends React.Component<Props> {
	render () {
		const { isFetching, hasError, errorMessage } = this.props;
		return (
			<div className="FetchCoordsState">
				{isFetching && <em>Locating&hellip;</em>}
				{hasError && <strong>Error: {errorMessage}</strong>}
			</div>
		);
	}
}
