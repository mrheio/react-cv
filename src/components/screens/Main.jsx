import React, { useEffect } from 'react';
import { Contact } from './contact/Contact.jsx';
import { Home } from './home/Home.jsx';
import { Portfolio } from './portfolio/Portfolio.jsx';
import bgMusic from '../../res/sound/bg-cyberspace.mp3';
import { Audio } from '../../utils/MediaUtils.js';

export const Main = () => {
	useEffect(() => {
		const audio = document.querySelector('.Main__audio');
		Audio.audioPlay(audio);
	});
	return (
		<React.StrictMode>
			<audio className='Main__audio' src={bgMusic} loop />
			<Home />
			<Portfolio />
			<Contact />
		</React.StrictMode>
	);
};
