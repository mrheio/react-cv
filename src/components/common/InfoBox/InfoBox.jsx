import React from 'react';

export const InfoBox = (props) => {
	return (
		<div className='InfoBox'>
			<div>
				<img className='InfoBox__image' src={props.src} alt='' />
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
