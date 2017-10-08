import * as React from 'react';

export interface Props extends React.HTMLAttributes<HTMLButtonElement> {

}

export default class FetchCoordsButton extends React.Component<Props> {
	render () {
		return (
			<button
				type="button"
				className="FetchCoordsButton"
				{...this.props}
			>
				&#8982;
			</button>
		);
	}
}
