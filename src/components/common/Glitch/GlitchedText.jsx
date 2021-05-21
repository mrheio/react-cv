import React from 'react';

export const GlitchedText = (props) => {
	return (
		<div className='glitch-text text-center' data-text={props.text}>
			{props.text}
		</div>
	);
};
