import React from 'react';
import profilePic from '../../../res/images/profile-pic.png';
import './HomeAfter.scss';
import { TextRectangle } from '../../common/TextRectangle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfinity, faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons';
import GlitchSquiggly from 'react-glitch-effect/core/GlitchSquiggly';
import GlitchClip from 'react-glitch-effect/core/GlitchClip';

export const HomeAfter = () => {
	return (
		<div className='HomeAfter'>
			<div className='HomeAfter__text'>
				<h1>
					Enough talk!
					<br />
					Private information
				</h1>
			</div>

			<div className='HomeAfter__flex-container'>
				<img className='HomeAfter__flex-container-image' src={profilePic} alt='' />
				<div className='HomeAfter__flex-container-item'>
					<TextRectangle theme={'light'}>Nume, Prenume</TextRectangle>
					<TextRectangle theme={'light'} hasLeftSideTriangle={true}>
						battling with procrastination
					</TextRectangle>
					<TextRectangle>Age: unknown</TextRectangle>
					<TextRectangle>
						Income: - <FontAwesomeIcon icon={faInfinity} />
					</TextRectangle>
				</div>
			</div>
			<div className='HomeAfter__bottom-arrow'>
				Life's work <br />
				<span>
					<FontAwesomeIcon icon={faLongArrowAltDown} />
				</span>
			</div>
		</div>
	);
};
