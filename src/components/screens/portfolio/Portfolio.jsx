import React from 'react';
import { InfoBox } from '../../common/InfoBox/InfoBox.jsx';
import './Portfolio.scss';
import meds from '../../../res/images/meds.svg';
import ieftinache from '../../../res/images/ieftinache.svg';
import ezcolet from '../../../res/images/ezcolet.svg';

class Project {
	constructor(link, iconSrc, name, about, technologies) {
		this.link = link;
		this.iconSrc = iconSrc;
		this.name = name;
		this.about = about;
		this.technologies = technologies;
	}
}

const projects = [
	new Project(
		'https://github.com/DrgOv/MedsProject',
		meds,
		'Meds',
		'Desktop App for online medical advice',
		'JavaFX + local storage in JSON format'
	),
	new Project(
		'https://github.com/StanDarius24/PDSS-WebSite-Angular-Firebase',
		ieftinache,
		'Ieftinache',
		'E-commerce website',
		'Angular + Firebase'
	),
	new Project(
		'https://github.com/DrgOv/ez-colet',
		ezcolet,
		'EZcolet',
		'Delivery Management Android App',
		'Kotlin + Firebase'
	)
];

export const Portfolio = () => {
	return (
		<div className='Portfolio'>
			{projects.map((project) => {
				const { link, iconSrc, name, about, technologies } = project;
				return <InfoBox link={link} src={iconSrc} name={name} about={about} technologies={technologies} />;
			})}
		</div>
	);
};
