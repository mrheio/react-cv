import React from 'react';

export const TextRectangle = (props) => {
	const baseStyle = {
		display: 'inline-block',
		fontSize: '1.7rem',
		fontWeight: 'bold',
		width: '400px',
		height: '50px',
		paddingLeft: '1.2rem',
		lineHeight: '50px'
	};
	const leftSideTriangleStyle = {
		clipPath: 'polygon(10% 0, 100% 0, 100% 50%, 100% 100%, 10% 100%, 0% 50%)',
		paddingLeft: '2.5rem',
		width: '500px'
	};
	const lightTheme = {
		background: '#f2f2f2',
		color: '#000'
	};
	const darkTheme = {
		background: '#000',
		color: '#f2f2f2'
	};
	return (
		<div
			style={{
				...baseStyle,
				...(props.theme === 'light' ? lightTheme : darkTheme),
				...(props.hasLeftSideTriangle ? leftSideTriangleStyle : {})
			}}
		>
			{props.children}
		</div>
	);
};
