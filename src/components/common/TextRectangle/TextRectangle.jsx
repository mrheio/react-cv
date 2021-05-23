import React from 'react';
import './TextRectangle.scss';

export const TextRectangle = (props) => {
	const theme = props.theme === 'light' ? 'TextRectangle--light' : 'TextRectangle--dark';
	const leftSideTriangle = props.hasLeftSideTriangle ? 'TextRectangle--leftSideTriangle' : '';
	const textRectangleClasses = `TextRectangle ${theme} ${leftSideTriangle}`;
	return (
		<div className={textRectangleClasses}>
			<h4>{props.children}</h4>
		</div>
	);
};
