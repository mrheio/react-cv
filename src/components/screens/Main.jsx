import React, { useEffect } from 'react';
import { Contact } from './contact/Contact.jsx';
import { Home } from './home/Home.jsx';
import { Portfolio } from './portfolio/Portfolio.jsx';
import bgMusic from '../../res/sound/bg-cyberspace.mp3';
import MediaUtils from './../../utils/MediaUtils';
import ReactFullpage from '@fullpage/react-fullpage';

export const Main = () => {
	useEffect(() => {
		const audio = document.querySelector('.Main__audio');
		MediaUtils.audioPlayFadeIn(audio);
	});
	const smallScreenRender = () => {
		return (
			<React.StrictMode>
				<Home />
				<Portfolio />
				<Contact />
				<audio className='Main__audio' src={bgMusic} loop />
			</React.StrictMode>
		);
	};
	const bigScreenRender = () => {
		return (
			<ReactFullpage
				render={() => {
					return (
						<ReactFullpage.Wrapper>
							<div className='section'>
								<Home />
							</div>
							<div className='section'>
								<Portfolio />
							</div>
							<div className='section'>
								<Contact />
							</div>
							<audio className='Main__audio' src={bgMusic} loop />
						</ReactFullpage.Wrapper>
					);
				}}
			/>
		);
	};
	return window.screen.width >= 1024 ? bigScreenRender() : smallScreenRender();
};
