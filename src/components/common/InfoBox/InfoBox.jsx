import React from 'react';
import './InfoBox.scss';

export const InfoBox = (props) => {
	return (
		<div className='InfoBox'>
			<div>
				<a href={props.link} target='_blank'>
					<img className='InfoBox__image' src={props.src} alt='' />
				</a>
			</div>
			<div>
				<h1>{props.title}</h1>
			</div>
			<div>
				<span>{props.text}</span>
			</div>
		</div>
	);
};
