import React from 'react';
import profile from '../../../res/images/profile.png';
import './Home.scss';
import { TextRectangle } from '../../common/TextRectangle/TextRectangle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfinity } from '@fortawesome/free-solid-svg-icons';
import { GlitchedText } from '../../common/Glitch/GlitchedText.jsx';

export const Home = () => {
	return (
		<div className='Home'>
			<GlitchedText text='Site security breached' />
			<GlitchedText text='Private information' />
			<div className='Home__profile'>
				<div className='Home__image'>
					<img src={profile} alt='' />
				</div>
				<div className='Home__data-container'>
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
