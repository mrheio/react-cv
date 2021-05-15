import React from 'react';
import { InfoBox } from '../../common/InfoBox/InfoBox.jsx';
import './Portfolio.scss';
import meds from '../../../res/images/meds.png';

export const Portfolio = () => {
	return (
		<div className='Portfolio'>
			<InfoBox src={meds} title={'Meds'} text={'Hey, Im a text for test'}></InfoBox>
		</div>
	);
};
