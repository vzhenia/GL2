import React from 'react';
import { Link } from 'react-router';
// eslint-disable-next-line
import style from './linkComponent.css';

const LinkComponent = ({value, name}) => {

	return (
		<span className='root' >
			<Link activeClassName='activeLink' to={value}>
				{name}
			</Link>
		</span>
	);
}

export default LinkComponent;
