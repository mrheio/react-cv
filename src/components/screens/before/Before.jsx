import React, { useEffect, useState } from 'react';
import './Before.scss';
import { GlitchImage } from '../../common/Glitch/GlitchImage/GlitchImage';
import bg from '../../../res/images/bg-before.png';
import UIUtils from './../../../utils/UIUtils';

export const Before = (props) => {
	const [component, setComponent] = useState(<img className='Before__static-img' src={bg} alt='' />);
	const onScreenChange = () => {
		// used to change screen
	};
	const onEffectChange = () => {
		setComponent(<GlitchImage imgSrc={bg} />);
	};
	useEffect(() => {
		Promise.resolve()
			.then(() => UIUtils.delay(1000))
			.then(() => onEffectChange())
			.then(() => UIUtils.delay(3000))
			.then(() => props.onScreenChange());
	}, []);

	return component;
};
