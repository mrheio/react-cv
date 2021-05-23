import React from 'react';
import './GlitchText.scss';

export const GlitchText = (props) => {
	return (
		<div className='GlitchText text-center' data-text={props.text}>
			{props.text}
		</div>
	);
};
