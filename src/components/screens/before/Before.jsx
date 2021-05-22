import React from 'react';
import './Before.scss';

export const Before = () => {
	return (
		<div className='Before'>
			<video
				className='Before__video'
				autoPlay
				onEnded={() => {
					hasFinished = true;
				}}
			>
				<source src={glitch} type='video/mp4' />
			</video>
		</div>
	);
};
