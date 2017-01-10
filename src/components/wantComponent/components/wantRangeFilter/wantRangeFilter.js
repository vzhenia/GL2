import React from 'react';
import PARAMS from '../../../../utils/params.js';
import EqualizeFilter from '../equalizeFilter';
// eslint-disable-next-line
import style from './wantRangeFilter.css';

class WantRangeFilter extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			[PARAMS[0].name]: this.props.initState[PARAMS[0].name],
			[PARAMS[1].name]: this.props.initState[PARAMS[1].name],
			[PARAMS[2].name]: this.props.initState[PARAMS[2].name],
			[PARAMS[3].name]: this.props.initState[PARAMS[3].name],
			[PARAMS[4].name]: this.props.initState[PARAMS[4].name]
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleEqualizer = this.handleEqualizer.bind(this);
	}

	handleChange(e){
		this.props.changeCalories(e.target.value,e.target.name);
		this.setState({[e.target.name]: e.target.value});
	}

	handleEqualizer(n){
		for (let i=0; i<PARAMS.length; i++){
			if (n === 'left'){
				this.setState({[PARAMS[i].name]: 0});
				this.props.changeCalories(0, [PARAMS[i].name]);
			}
			else if (n === 'neutral'){
				this.setState({[PARAMS[i].name]: 50});
				this.props.changeCalories(50, [PARAMS[i].name]);
			}
			else {
				this.setState({[PARAMS[i].name]: 100});
				this.props.changeCalories(100, [PARAMS[i].name]);
			}
		}
	}

	render(){
		return (
			<div className="main_box_range">
				<EqualizeFilter handleEqualizer={this.handleEqualizer}/>
				<form>
					{PARAMS.map(({name, left, right}, key) => (
						<li key={`param-${key}`}>
							<div className='left'>{left}</div>
							<div className='right'>{right}</div>
							<input type="range" name={name} onChange={this.handleChange} value={this.state[name]}/>
						</li>
					))}
				</form>
			</div>
		)
	}
}

export default WantRangeFilter;
