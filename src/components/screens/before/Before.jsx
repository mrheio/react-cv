import React, { useEffect, useState } from 'react';
import './Before.scss';
import soundEffect from '../../../res/sound/glitch-sound.mp3';
import { GlitchedImage } from '../../common/Glitch/img-glitch-p5/GlitchedImage.jsx';
import bg from '../../../res/images/bg-before.png';
import MediaUtils from '../../../utils/MediaUtils.js';
import UIUtils from './../../../utils/UIUtils';

export const Before = (props) => {
	const [component, setComponent] = useState(<img className='Before__static-img' src={bg} alt='' />);
	const onScreenChange = () => {};
	const onEffectChange = () => {
		setComponent(<GlitchedImage imgSrc={bg} />);
	};
	useEffect(() => {
		const audio = new Audio(soundEffect);
		const elements = document.querySelectorAll('.Before__item');
		Promise.resolve()
			.then(() => UIUtils.delay(1000))
			.then(() => onEffectChange())
			.then(() => UIUtils.delay(3000))
			.then(() => props.onScreenChange());
	}, []);

	return component;
};
