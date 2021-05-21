// import React from 'react';
// import Sketch from 'react-p5';
// import Glitch from './Glitch';
// import './GlitchedImage.scss';

// let glitch;
// let isLoaded = false;
// let img;

// export const GlitchedImage = (props) => {
// 	const setup = (p5, canvasParentRef) => {
// 		const canvasDiv = document.querySelector('.react-p5');
// 		const width = canvasDiv.offsetWidth;
// 		const height = canvasDiv.offsetHeight;
// 		p5.createCanvas(width, height).parent(canvasParentRef);
// 		p5.loadImage(props.imgSrc, (image) => {
// 			image.resize(width, height);
// 			glitch = new Glitch(p5, image);
// 			isLoaded = true;
// 		});
// 	};

// 	const draw = (p5) => {
// 		p5.clear();

// 		if (isLoaded) {
// 			glitch.show();
// 		}
// 	};

// 	return <Sketch setup={setup} draw={draw} />;
// };
