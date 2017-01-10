import React from 'react';
// eslint-disable-next-line
import style from './equalizeFilter.css';

class EqualizeFilter extends React.Component {
	constructor(props){
		super(props);

		this.handleClick = this.handleClick.bind(this);
		}

		handleClick(e){
			e.preventDefault();
			this.props.handleEqualizer(e.target.name);
		}
		
	render(){
		const EQUALS = ['left', 'neutral', 'right'];
		const TXT = ['feeling hungry!', 'neutral', 'feeling a vegan'];
		return (
			<div className='equalizeButContainer'>
				{EQUALS.map((elt, key) => (
					<div key={`equal-${key}`}>
						<button className='equalizeBut' name={elt} onClick={this.handleClick}>{TXT[key]}</button>
					</div>
				))}
			</div>
		)
	}
}

export default EqualizeFilter;
