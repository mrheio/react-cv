export default class UIUtils {
	static delay = (duration) => {
		return new Promise((resolve) => {
			setTimeout(() => resolve(), duration);
		});
	};

	static addGlitchClass = (DOMElement) => {
		DOMElement.classList.add('glitch__item');
	};
	static removeGlitchClass = (DOMElement) => {
		DOMElement.classList.remove('glitch__item');
	};
	static playEffect = (effect, time) => {
		setTimeout(() => {
			effect.play();
		}, time);
		setTimeout(() => {
			effect.pause();
		}, time + 300);
	};
	static startGlitch = (elements, effect, time) => {
		elements.forEach((element) => {
			this.addGlitchClass(element);
		});
		this.playEffect(effect, time);
	};
	static stopGlitch = (elements, effect) => {
		effect.pause();
		elements.forEach((element) => {
			this.removeGlitchClass(element);
		});
	};
}
