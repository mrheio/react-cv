import React, { useEffect, useState } from 'react';
import './App.scss';
import { Before } from './components/screens/before/Before.jsx';
import { Main } from './components/screens/Main.jsx';
import UIUtils from './utils/UIUtils.js';

export const App = () => {
	const handleScreenChange = () => {
		Promise.resolve()
			.then(() => setComponent(null))
			.then(() => UIUtils.delay(2500))
			.then(() => setComponent(<Main />));
	};
	const [component, setComponent] = useState(<Before onScreenChange={handleScreenChange} />);
	return component;
};
