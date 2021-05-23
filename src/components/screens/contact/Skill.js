class Skill {
	constructor(key, name, value) {
		this.key = key;
		this.name = name;
		this.value = value;
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
