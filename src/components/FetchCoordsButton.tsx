import * as React from 'react';

export interface Props extends React.HTMLAttributes<HTMLButtonElement> {

}

const FetchCoordsButton: React.StatelessComponent<Props> = (props) => (
	<div className="FetchCoordsButton btn-group d-flex">
		<button
			className="FetchCoordsButton-button btn border-primary"
			type="button"
			{...props}
		>
			Locate me
		</button>
	</div>
);

export default FetchCoordsButton;
