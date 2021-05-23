import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { GlitchText } from '../../common/Glitch/GlitchText/GlitchText';
import { LabeledProgressBar } from '../../common/LabeledProgressBar/LabeledProgressBar.jsx';
import { programmingSkills, designSkills } from './Skill';
import { contacts } from './ContactMedia';
import './Contact.scss';

const Skills = (props) => {
	return (
		<div>
			<h3>{props.category}</h3>
			{props.skills.map((skill) => {
				const { key, name, value, level } = skill;
				return <LabeledProgressBar key={key} label={name} value={value} level={level} />;
			})}
		</div>
	);
};

const ContactsItem = (props) => {
	return props.contacts.map((contact) => {
		const { key, link, icon, name } = contact;
		return (
			<div key={key}>
				<div className='ContactItem__icon'>
					<a href={link} target='__blank' rel='noreferrer'>
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
		<React.StrictMode>
			<div className='Contact'>
				<div className='Contact__skills'>
					<GlitchText text='Skills' />
					<Skills category='Programming' skills={programmingSkills} />
					<hr />
					<Skills category='Graphic Design' skills={designSkills} />
				</div>
				<div className='Contact__media'>
					<ContactsItem contacts={contacts} />
				</div>
			</div>
			<footer className='Contact__footer'>Design inspired by Watch Dogs&reg; series</footer>
		</React.StrictMode>
	);
};
