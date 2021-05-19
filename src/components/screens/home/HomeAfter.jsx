import React from 'react';
import profile from '../../../res/images/profile.png';
import './HomeAfter.scss';
import { TextRectangle } from '../../common/TextRectangle/TextRectangle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfinity } from '@fortawesome/free-solid-svg-icons';
import { GlitchedText } from '../../common/GlitchedText/GlitchedText.jsx';

export const HomeAfter = () => {
	return (
		<div className='HomeAfter'>
			<GlitchedText text='Site security breached' />
			<GlitchedText text='Private information' />
			<div className='HomeAfter__profile'>
				<div className='HomeAfter__image'>
					<img src={profile} alt='' />
				</div>
				<div className='HomeAfter__data-container'>
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
