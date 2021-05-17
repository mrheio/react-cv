import React from 'react';
import './InfoBox.scss';

export const InfoBox = (props) => {
	return (
		<div className='InfoBox'>
			<div className='InfoBox__image-container'>
				<a href={props.link} target='_blank'>
					<img src={props.src} alt='' />
				</a>
			</div>
			<div className='InfoBox__text-container l-margin'>
				<div>
					<h1>{props.name}</h1>
				</div>
				<div>
					<span>{props.about}</span>
					<br />
					<span className='InfoBox__technologies'>{props.technologies}</span>
				</div>
			</div>
		</div>
	);
};
