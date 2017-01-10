import React from 'react';

import INGREDS from '../../../../utils/ingreds.js';
// eslint-disable-next-line
import style from './wantIngredFilter.css';

class WantIngredFilter extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			meat: this.props.initState.includes('meat'),
			pollo: this.props.initState.includes('pollo'),
			fish: this.props.initState.includes('fish'),
			veges: this.props.initState.includes('veges')
		}

		this.handleClick = this.handleClick.bind(this);
		this.toggleActiveClass = this.toggleActiveClass.bind(this);
		this.insertClass = this.insertClass.bind(this);
	}

	toggleActiveClass(e){
		let butt = e.target.name;
		Object.keys(this.state).forEach((k) => {
			if (k===butt){ this.setState({[k]:!this.state[k]}); }
		})
	}

	insertClass(name){
		return this.state[name] ? 'active' : '';
	}

	handleClick(e){
		e.preventDefault();
		this.props.changeIngreds(e.target.name);
	}

	render(){
		return (
			<div className='butContainer'>
				{INGREDS.map((elt, key) => {
					return (
					<div className={'ingredBut '+ this.insertClass(elt.type)} key={`ingred-${key}`} name={elt.type} onClick={this.toggleActiveClass}>
							<img src={elt.address} role="presentation" name={elt.type} alt={elt.type} onClick={this.handleClick}/>
					</div>)
				})}
			</div>
		)
	}
}

export default WantIngredFilter;
