import React from 'react';
import './LabeledProgressBar.scss';
import { ProgressBar } from 'react-bootstrap';

export const LabeledProgressBar = (props) => {
	return (
		<div className='LabeledProgressBar'>
			<h5>{props.label}</h5>
			<ProgressBar variant={props.type} now={props.value} />
		</div>
	);
};
