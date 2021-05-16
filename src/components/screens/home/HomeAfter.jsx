import React from 'react';
import profile from '../../../res/images/profile-pic.png';
import './HomeAfter.scss';
import { TextRectangle } from '../../common/TextRectangle/TextRectangle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfinity } from '@fortawesome/free-solid-svg-icons';

export const HomeAfter = () => {
	return (
		<div className='HomeAfter padded-container'>
			<div className='HomeAfter__welcome-container'>
				<h1>
					Enough talk!
					<br />
					Private information
				</h1>
			</div>
			<div className='HomeAfter__info-container'>
				<img className='HomeAfter__image' src={profile} alt='' />
				<div className='HomeAfter__data-container'>
					<TextRectangle theme={'light'}>Nume, Prenume</TextRectangle>
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
