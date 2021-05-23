import React, { useEffect } from 'react';
import './Before.scss';
import soundEffect from '../../../res/sound/glitch-sound.mp3';
import UIUtils from '../../../utils/UIUtils.js';

export const Before = () => {
	const audio = new Audio(soundEffect);

	useEffect(() => {
		const elements = document.querySelectorAll('.Before__item');
		Promise.resolve()
			.then(() => UIUtils.delay(5000))
			.then(() => UIUtils.startGlitch(elements, audio, 1200))
			.then(() => UIUtils.delay(3000))
			.then(() => UIUtils.stopGlitch(elements, audio))
			.then(() => UIUtils.delay(2000))
			.then(() => UIUtils.startGlitch(elements, audio, 1200))
			.then(() => UIUtils.delay(3000))
			.then(() => UIUtils.stopGlitch(elements, audio))
			.then(() => UIUtils.delay(3000))
			.then(() => UIUtils.startGlitch(elements, audio, 1200))
			.then(() => UIUtils.delay(3000))
			.then(() => UIUtils.stopGlitch(elements, audio));
	});

	return (
		<div className='Before'>
			<div className='Before__item'></div>
			<div className='Before__item'></div>
			<div className='Before__item'></div>
			<div className='Before__item'></div>
			<div className='Before__item'></div>
			<header className='Before__welcome'>
				<h2>Hello and welcome!</h2>
			</header>
		</div>
	);
};
