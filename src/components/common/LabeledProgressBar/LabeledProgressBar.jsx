import React from 'react';
import { Line, Circle } from 'rc-progress';
import './LabeledProgressBar.scss';
import { ProgressBar } from 'react-bootstrap';

export const LabeledProgressBar = (props) => {
	return (
		<div className='LabeledProgressBar'>
			<h5 className='LabeledProgressBar__label'>{props.label}</h5>
			<ProgressBar variant={props.type} now={props.value}></ProgressBar>
		</div>
	);
};
