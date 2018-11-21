import * as React from 'react';
const imageSrc = require('../images/ribbon.png');

const Ribbon: React.StatelessComponent = () => (
	<a href="https://github.com/j-/sun">
		<img
			style={{ position: 'absolute', top: 0, right: 0, border: 0 }}
			src={imageSrc}
			alt="Fork me on GitHub"
			data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png"
		/>
	</a>
);

export default Ribbon;
