import React, { useEffect, useState } from 'react';
import './App.scss';
import { Before } from './components/screens/before/Before.jsx';
import { Main } from './components/screens/Main.jsx';

export const App = () => {
	const [component, setComponent] = useState(<Before />);
	return component;
};
