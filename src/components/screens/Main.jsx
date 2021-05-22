import React from 'react';
import { Contact } from './contact/Contact.jsx';
import { Home } from './home/Home.jsx';
import { Portfolio } from './portfolio/Portfolio.jsx';
import bgMusic from '../../res/sound/bg-cyberspace.mp3';

export const Main = () => {
	let fadeTimer;
	const audioPlay = () => {
		clearTimeout(fadeTimer);
		const audio = document.querySelector('.Main__audio');
		audio.volume = 0;
		audio.currentTime = 0;
		audio.play();
		audioFadeIn();
	};
	const audioFadeIn = () => {
		clearTimeout(fadeTimer);
		const audio = document.querySelector('.Main__audio');
		console.log(audio.volume);
		if (audio.volume < 0.01) {
			audio.volume = audio.volume + 0.0001;
			fadeTimer = setTimeout(audioFadeIn, 500);
		}
	};
	return (
		<React.StrictMode>
			<audio className='Main__audio' src={bgMusic} loop autoPlay onPlay={audioPlay} />
			<Home />
			<Portfolio />
			<Contact />
		</React.StrictMode>
	);
};
