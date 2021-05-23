import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { GlitchedText } from '../../common/Glitch/GlitchedText.jsx';
import { LabeledProgressBar } from '../../common/LabeledProgressBar/LabeledProgressBar.jsx';
import { programmingSkills, designSkills } from './Skill';
import { contacts } from './ContactMedia';
import './Contact.scss';

const Skills = (props) => {
	return (
		<div className='Skill'>
			<h3 className='Skill__name'>{props.category}</h3>
			{props.skills.map((skill) => {
				const { key, name, value } = skill;
				return <LabeledProgressBar key={key} label={name} value={value} />;
			})}
		</div>
	);
};

const ContactsItem = (props) => {
	return props.contacts.map((contact) => {
		const { key, link, icon, name } = contact;
		return (
			<div key={key} className='ContactItem text-center'>
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
