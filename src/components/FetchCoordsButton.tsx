import * as React from 'react';

export interface Props extends React.HTMLAttributes<HTMLButtonElement> {

}

export default class FetchCoordsButton extends React.Component<Props> {
	render () {
		return (
			<button
				className="FetchCoordsButton pt-button pt-large"
				type="button"
				{...this.props}
			>
				<span className="pt-icon-standard pt-icon-locate" /> Locate me
			</button>
		);
	}
}
