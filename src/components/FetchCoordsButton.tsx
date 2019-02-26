import * as React from 'react';

export interface Props extends React.HTMLAttributes<HTMLButtonElement> {

}

const FetchCoordsButton: React.StatelessComponent<Props> = (props) => (
	<button
		className="FetchCoordsButton btn btn-secondary"
		type="button"
		{...props}
	>
		Locate me
	</button>
);

export default FetchCoordsButton;
