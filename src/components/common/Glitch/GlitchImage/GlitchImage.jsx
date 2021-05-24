import React from 'react';
import Sketch from 'react-p5';
import Glitch from './Glitch';
import './GlitchImage.scss';

let image;
let glitch;
let isLoaded = false;

export const GlitchImage = (props) => {
	const setup = (p5, canvasParentRef) => {
		const canvasDiv = document.querySelector('.react-p5');
		const width = canvasDiv.offsetWidth;
		const height = canvasDiv.offsetHeight;
		p5.createCanvas(width, height).parent(canvasParentRef);
		image = p5.loadImage(props.imgSrc, (image) => {
			image.resize(width, height);
			p5.image(image, 0, 0);
			setTimeout(() => {
				glitch = new Glitch(p5, image);
				isLoaded = true;
			}, 1000);
		});
	};

	const draw = (p5) => {
		p5.clear();

		if (isLoaded) {
			glitch.show();
		} else {
			p5.image(image, 0, 0);
		}
	};

	return <Sketch setup={setup} draw={draw} />;
};
