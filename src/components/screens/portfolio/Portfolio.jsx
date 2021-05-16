import React from 'react';
import { InfoBox } from '../../common/InfoBox/InfoBox.jsx';
import './Portfolio.scss';
import meds from '../../../res/images/meds.svg';
import ieftinache from '../../../res/images/ieftinache.svg';
import ezcolet from '../../../res/images/ezcolet.svg';

export const Portfolio = () => {
	return (
		<div className='Portfolio'>
			<InfoBox
				link='https://github.com/DrgOv/MedsProject'
				src={meds}
				title={'Meds'}
				about={'Desktop App for online medical advice'}
				technologies={'JavaFX + local storage in JSON format'}
			></InfoBox>
			<InfoBox
				link='https://github.com/StanDarius24/PDSS-WebSite-Angular-Firebase'
				src={ieftinache}
				title={'Ieftinache'}
				about={'E-commerce website'}
				technologies={'Angular + Firebase'}
			></InfoBox>
			<InfoBox
				link='https://github.com/DrgOv/ez-colet'
				src={ezcolet}
				title={'EZcolet'}
				about={'Delivery Management Android App'}
				technologies={'Kotlin + Firebase'}
			></InfoBox>
		</div>
	);
};
