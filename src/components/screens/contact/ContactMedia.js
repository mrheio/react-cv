import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

class ContactMedia {
	constructor(key, link, icon, name) {
		this.key = key;
		this.link = link;
		this.icon = icon;
		this.name = name;
	}
}

export const contacts = [
	new ContactMedia(1, 'https://github.com/DrgOv', faGithub, 'GitHub'),
	new ContactMedia(2, '#', faEnvelope, 'email@email.com')
];
