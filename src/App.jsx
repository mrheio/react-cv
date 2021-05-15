import React from 'react';
import { HomeBefore } from './components/screens/home/HomeBefore';
import './App.scss';
import { HomeAfter } from './components/screens/home/HomeAfter';
import { Portfolio } from './components/screens/portfolio/Portfolio.jsx';

export const App = () => {
	return (
		<div className='container'>
			<Portfolio></Portfolio>
		</div>
	);
};
