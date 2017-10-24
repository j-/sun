import * as React from 'react';
import CurrentDate from '../containers/CurrentDate';
import DatePicker from '../containers/DatePicker';
import './DateControls.css';

export default class DateControls extends React.Component {
	render () {
		return (
			<div className="DateControls">
				<div className="DateControls-current-date">
					<CurrentDate />
				</div>
				<div className="DateControls-date-picker">
					<DatePicker />
				</div>
			</div>
		);
	}
}
