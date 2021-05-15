import { faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './TextArrow.scss';

export const TextArrow = (props) => {
	return (
		<div className='TextArrow'>
			{props.text} <br />
			<span>
				<FontAwesomeIcon icon={faLongArrowAltDown}></FontAwesomeIcon>
			</span>
		</div>
	);
};
