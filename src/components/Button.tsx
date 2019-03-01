import * as React from 'react';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}

const Button: React.FunctionComponent<Props> = (props) => (
	<button className="Button btn" type="button" {...props} />
);

export default Button;
