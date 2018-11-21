import * as React from 'react';

export interface Props extends React.HTMLAttributes<HTMLButtonElement> {

}

const FetchCoordsButton: React.StatelessComponent<Props> = (props) => (
	<button
		className="FetchCoordsButton pt-button pt-large"
		type="button"
		{...props}
	>
		<span className="pt-icon-standard pt-icon-locate" /> Locate me
	</button>
);

export default FetchCoordsButton;
