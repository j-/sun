import * as React from 'react';
import imageSrc from '../images/ribbon.png';
import './Ribbon.css';

const Ribbon: React.StatelessComponent = () => (
	<a className="Ribbon" href="https://github.com/j-/sun">
		<img
			className="Ribbon-image"
			src={imageSrc}
			alt="Fork me on GitHub"
			data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png"
		/>
	</a>
);

export default Ribbon;
