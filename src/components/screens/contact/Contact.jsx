import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { GlitchedText } from '../../common/Glitch/GlitchedText.jsx';
import { LabeledProgressBar } from '../../common/LabeledProgressBar/LabeledProgressBar.jsx';
import './Contact.scss';

class Skill {
	constructor(key, name, value) {
		this.key = key;
		this.name = name;
		this.value = value;
	}
}

class ContactMedia {
	constructor(key, link, icon, name) {
		this.key = key;
		this.link = link;
		this.icon = icon;
		this.name = name;
	}
}

const programmingSkills = [
	new Skill(1, 'Java', 50),
	new Skill(2, 'Kotlin', 45),
	new Skill(3, 'HTML', 35),
	new Skill(4, 'CSS', 35),
	new Skill(5, 'JavaScript', 40),
	new Skill(6, 'React', 100)
];

const designSkills = [new Skill(1, 'Illustrator', 45), new Skill(2, 'PhotoShop', 40)];

const Skills = (props) => {
	return (
		<div className='Skill'>
			<h3 className='Skill__name'>{props.category}</h3>
			{props.skills.map((skill) => {
				const { name, value } = skill;
				return <LabeledProgressBar label={name} value={value} />;
			})}
		</div>
	);
};

const contacts = [
	new ContactMedia(1, 'https://github.com/DrgOv', faGithub, 'GitHub'),
	new ContactMedia(2, '#', faEnvelope, 'email@email.com')
];

const ContactsItem = (props) => {
	return props.contacts.map((contact) => {
		const { link, icon, name } = contact;
		return (
			<div className='ContactItem text-center'>
				<div>
					<a className='ContactItem__icon' href={link} target='__blank' rel='noreferrer'>
						<FontAwesomeIcon icon={icon} />
					</a>
				</div>
				<h2>{name}</h2>
			</div>
		);
	});
};

export const Contact = () => {
	return (
		<div className='Contact'>
			<div className='Contact__skills text-center'>
				<GlitchedText text='Skills' />
				<Skills category='Programming' skills={programmingSkills} />
				<hr />
				<Skills category='Graphic Design' skills={designSkills} />
			</div>
			<div className='Contact__info'>
				<ContactsItem contacts={contacts} />
			</div>
		</div>
	);
};
