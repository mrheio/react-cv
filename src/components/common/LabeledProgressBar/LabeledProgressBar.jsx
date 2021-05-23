import React, { useState } from 'react';
import './LabeledProgressBar.scss';
import { ProgressBar } from 'react-bootstrap';

export const LabeledProgressBar = (props) => {
	const [levelInfo, setLevelInfo] = useState(null);
	const showLevel = () => {
		setLevelInfo(`Level: ${props.level}`);
	};
	const hideLevel = () => {
		setLevelInfo(null);
	};
	const progressBarClasses = props.alert ? 'LabeledProgressBar--alert' : '';
	return (
		<div className='LabeledProgressBar'>
			<div className='LabeledProgressBar__info'>
				<h5>{props.label}</h5>
				<h5>{levelInfo}</h5>
			</div>
			<ProgressBar
				className={progressBarClasses}
				variant={props.type}
				now={props.value}
				onMouseEnter={showLevel}
				onMouseLeave={hideLevel}
			/>
		</div>
	);
};
