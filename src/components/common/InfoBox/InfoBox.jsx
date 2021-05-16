import React from 'react';
import './InfoBox.scss';

export const InfoBox = (props) => {
	return (
		<div className='InfoBox'>
			<div className='InfoBox__image'>
				<a href={props.link} target='_blank'>
					<img src={props.src} alt='' />
				</a>
			</div>
			<div>
				<h1>{props.title}</h1>
			</div>
			<div>
				<span>{props.about}</span>
				<br />
				<span className='InfoBox__technologies'>{props.technologies}</span>
			</div>
		</div>
	);
};
