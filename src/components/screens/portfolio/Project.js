import meds from '../../../res/images/meds.svg';
import ieftinache from '../../../res/images/ieftinache.svg';
import ezcolet from '../../../res/images/ezcolet.svg';

class Project {
	constructor(key, link, iconSrc, name, about, technologies) {
		this.key = key;
		this.link = link;
		this.iconSrc = iconSrc;
		this.name = name;
		this.about = about;
		this.technologies = technologies;
	}
}

export const projects = [
	new Project(
		1,
		'https://github.com/DrgOv/MedsProject',
		meds,
		'Meds',
		'Desktop App for online medical advice',
		'JavaFX + local storage in JSON format'
	),
	new Project(
		2,
		'https://github.com/StanDarius24/PDSS-WebSite-Angular-Firebase',
		ieftinache,
		'Ieftinache',
		'E-commerce website',
		'Angular + Firebase'
	),
	new Project(
		3,
		'https://github.com/DrgOv/ez-colet',
		ezcolet,
		'EZcolet',
		'Delivery Management Android App',
		'Kotlin + Firebase'
	)
];
