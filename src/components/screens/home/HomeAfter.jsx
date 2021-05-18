import React from 'react';
import profile from '../../../res/images/profile.png';
import './HomeAfter.scss';
import { TextRectangle } from '../../common/TextRectangle/TextRectangle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfinity } from '@fortawesome/free-solid-svg-icons';

export const HomeAfter = () => {
	return (
		<div className='HomeAfter'>
			<div className='HomeAfter__welcome-container text-center'>
				<h1>Enough talk! </h1>
				<h1>Private information</h1>
			</div>
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
