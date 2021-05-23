import React from 'react';
import { GlitchedText } from '../Glitch/GlitchedText.jsx';
import './InfoBox.scss';

export const InfoBox = (props) => {
	return (
		<div className='InfoBox'>
			<div className='InfoBox__image-container'>
				<a href={props.link} target='_blank' rel='noreferrer'>
					<img src={props.src} alt='' />
				</a>
			</div>
			<div className='InfoBox__text-container l-margin text-center'>
				<GlitchedText text={props.name} />
				<div>
					<h3>{props.about}</h3>
					<h4 className='InfoBox__technologies'>{props.technologies}</h4>
				</div>
			</div>
		</div>
	);
};
