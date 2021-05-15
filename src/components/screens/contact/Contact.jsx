import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Contact.scss';

export const Contact = () => {
	return (
		<div className='Contact'>
			<div className='Contact__icon'>
				<a className='Contact__icon-link' href='https://github.com/DrgOv' target='__blank'>
					<FontAwesomeIcon icon={faGithub} />
				</a>{' '}
				<br></br> Github
			</div>
			<div className='Contact__icon'>
				<FontAwesomeIcon icon={faEnvelope} /> <br></br> email@gmail.com
			</div>
		</div>
	);
};
