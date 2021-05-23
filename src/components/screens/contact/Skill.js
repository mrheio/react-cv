class Skill {
	constructor(key, name, value, level) {
		this.key = key;
		this.name = name;
		this.value = value;
		if (value < 40) {
			this.level = 'newbie';
		}
		if (value >= 40 && value <= 75) {
			this.level = 'intermediate';
		}
		if (value > 75) {
			this.level = 'experienced';
		}
		if (name === 'React') {
			this.level = 'God';
		}
	}
}

export const programmingSkills = [
	new Skill(1, 'Java', 50),
	new Skill(2, 'Kotlin', 45),
	new Skill(3, 'HTML', 35),
	new Skill(4, 'CSS', 35),
	new Skill(5, 'JavaScript', 40),
	new Skill(6, 'React', 100)
];

export const designSkills = [new Skill(1, 'Illustrator', 45), new Skill(2, 'PhotoShop', 40)];
