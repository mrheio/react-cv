import React from 'react';
import { HomeBefore } from './components/screens/home/HomeBefore';
import './App.scss';
import { HomeAfter } from './components/screens/home/HomeAfter';
import { Portfolio } from './components/screens/portfolio/Portfolio.jsx';
import { Contact } from './components/screens/contact/Contact.jsx';

export const App = () => {
	return (
		<div className='container'>
			<HomeAfter></HomeAfter>
			<Portfolio></Portfolio>
			<Contact></Contact>
		</div>
	);
};
