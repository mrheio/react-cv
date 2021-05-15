import React from 'react';
import { InfoBox } from '../../common/InfoBox/InfoBox.jsx';
import './Portfolio.scss';
import meds from '../../../res/images/meds.png';
import ieftinache from '../../../res/images/ieftinache.png';
import ezcolet from '../../../res/images/ezcolet.png';

export const Portfolio = () => {
	return (
		<div className='Portfolio'>
			<InfoBox
				link='https://github.com/DrgOv/MedsProject'
				src={meds}
				title={'Meds'}
				text={'JavaFX project with local storage in JSON format'}
			></InfoBox>
			<InfoBox
				link='https://github.com/StanDarius24/PDSS-WebSite-Angular-Firebase'
				src={ieftinache}
				title={'Ieftinache'}
				text={'Angular project using Firebase as backend'}
			></InfoBox>
			<InfoBox
				link='https://github.com/DrgOv/ez-colet'
				src={ezcolet}
				title={'EZcolet'}
				text={'Android App developed using Kotlin + Firebase'}
			></InfoBox>
		</div>
	);
};
