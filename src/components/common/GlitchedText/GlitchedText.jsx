import React from 'react';

export const GlitchedText = (props) => {
	return (
		<div className='glitch-text text-center'>
			<span className='glitch-text-overlay'>{props.text}</span>
			<span className='glitch-text-overlay'>{props.text}</span>
			<span>{props.text}</span>
		</div>
	);
};
