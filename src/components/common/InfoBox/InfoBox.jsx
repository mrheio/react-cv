import React from 'react';
import { GlitchText } from '../Glitch/GlitchText/GlitchText';
import './InfoBox.scss';

export const InfoBox = (props) => {
	return (
		<div className='InfoBox'>
			<div className='InfoBox__image-container'>
				<a href={props.link} target='_blank' rel='noreferrer'>
					<img src={props.src} alt='' />
				</a>
			</div>
			<div className='InfoBox__text-container'>
				<GlitchText text={props.name} />
				<h3>{props.about}</h3>
				<h4 className='InfoBox__technologies'>{props.technologies}</h4>
			</div>
		</div>
	);
};
