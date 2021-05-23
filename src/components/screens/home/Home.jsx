import React from 'react';
import profile from '../../../res/images/profile.png';
import './Home.scss';
import { TextRectangle } from '../../common/TextRectangle/TextRectangle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfinity } from '@fortawesome/free-solid-svg-icons';
import { GlitchText } from '../../common/Glitch/GlitchText/GlitchText';

export const Home = () => {
	return (
		<div className='Home'>
			<GlitchText text='Site security breached' />
			<GlitchText text='Private information' />
			<div className='Home__profile'>
				<img src={profile} alt='' />
				<div className='Home__info'>
					<TextRectangle theme={'light'} text=''>
						Nume, Prenume
					</TextRectangle>
					<TextRectangle theme={'light'} hasLeftSideTriangle={true}>
						battling with procrastination
					</TextRectangle>
					<TextRectangle>Age: unknown</TextRectangle>
					<TextRectangle>
						Income: - <FontAwesomeIcon icon={faInfinity} />
					</TextRectangle>
					<TextRectangle>Unemployed</TextRectangle>
				</div>
			</div>
		</div>
	);
};
