import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { LabeledProgressBar } from '../../common/LabeledProgressBar/LabeledProgressBar.jsx';
import './Contact.scss';

class Skill {
	constructor(name, value) {
		this.name = name;
		this.value = value;
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

export const Contact = () => {
	return (
		<div className='Contact padded-container'>
			<div className='Contact__skill-levels'>
				<h1>Skills</h1>
				<Skills category='Programming' skills={programmingSkills} />
				<Skills category='Graphic Design' skills={designSkills} />
			</div>
			<div className='Contact__info'>
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
		</div>
	);
};
