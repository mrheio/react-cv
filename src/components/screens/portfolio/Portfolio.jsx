import React from 'react';
import { InfoBox } from '../../common/InfoBox/InfoBox.jsx';
import './Portfolio.scss';
import { projects } from './Project';

export const Portfolio = () => {
	return (
		<div className='Portfolio'>
			{projects.map((project) => {
				const { key, link, iconSrc, name, about, technologies } = project;
				return (
					<InfoBox
						key={key}
						link={link}
						src={iconSrc}
						name={name}
						about={about}
						technologies={technologies}
					/>
				);
			})}
		</div>
	);
};
