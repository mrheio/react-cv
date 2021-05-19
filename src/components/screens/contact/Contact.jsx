import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { GlitchedText } from '../../common/GlitchedText/GlitchedText.jsx';
import { LabeledProgressBar } from '../../common/LabeledProgressBar/LabeledProgressBar.jsx';
import './Contact.scss';

class Skill {
	constructor(name, value) {
		this.name = name;
		this.value = value;
	}
}

class ContactMedia {
	constructor(link, icon, name) {
		this.link = link;
		this.icon = icon;
		this.name = name;
	}
}

const programmingSkills = [
	new Skill('Java', 50),
	new Skill('Kotlin', 45),
	new Skill('HTML', 35),
	new Skill('CSS', 35),
	new Skill('JavaScript', 40),
	new Skill('React', 100)
];

const designSkills = [new Skill('Illustrator', 45), new Skill('PhotoShop', 40)];

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
	new ContactMedia('https://github.com/DrgOv', faGithub, 'GitHub'),
	new ContactMedia('#', faEnvelope, 'email@email.com')
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
