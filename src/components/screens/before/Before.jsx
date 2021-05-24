import React, { useEffect, useState } from 'react';
import './Before.scss';
import { GlitchImage } from '../../common/Glitch/GlitchImage/GlitchImage';
import bg from '../../../res/images/bg-before.png';
import UIUtils from './../../../utils/UIUtils';
import Sketch from 'react-p5';

export const Before = (props) => {
	const onScreenChange = () => {
		// used to change screen
	};
	useEffect(() => {
		Promise.resolve()
			.then(() => UIUtils.delay(4000))
			.then(() => props.onScreenChange());
	}, []);

	return <GlitchImage imgSrc={bg} />;
};
