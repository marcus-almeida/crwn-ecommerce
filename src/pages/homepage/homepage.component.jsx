import React from 'react';
import Directory from '../../components/directory/directory.component';
import './homepage.styles.scss';

const HomePage = () => {
	const subtitle = 'SHOP NOW';
	return (
		<div className='homepage'>
			<Directory />
		</div>
	);
	
};

export default HomePage;