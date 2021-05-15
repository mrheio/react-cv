import React from 'react';
import './HomeBefore.scss';

export const HomeBefore = () => {
	return (
		<div className='HomeBefore'>
			<div className='HomeBefore__welcome-text'>
				<h1>
					<span className='HomeBefore__welcome-text--red-orange-text'>Hi</span>,{' '}
					<span className='HomeBefore__welcome-text--purple-text'>I'm</span>{' '}
					<span className='HomeBefore__welcome-text--orange-text'>Ovi</span>!
				</h1>
			</div>
			<div className='HomeBefore__flex-container'>
				<div className='HomeBefore__flex-container-box'>
					<h3>designer</h3>
					<h4>UI/UX designer with a passion for creating amazing and functional user experiences</h4>
				</div>
				<div className='HomeBefore__flex-container-box'>
					<h3>&lt;coder&gt;</h3>
					<h4>
						software developer who focuses on writing clean and efficient code for making things that make a
						difference
					</h4>
				</div>
			</div>
		</div>
	);
};
