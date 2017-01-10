import React from 'react';

import WantIngredFilter from './components/wantIngredFilter';
import WantRangeFilter from './components/wantRangeFilter';
import LinkComponent from '../linkComponent';
import { calcQueryWant } from '../../utils/functions.js';
import PARAMS from '../../utils/params.js';
import P from '../../utils/products.js';
const INGREDS = [P[1],P[2],P[3],P[4]]
// eslint-disable-next-line
import style from './wantStyle.css';

class WantComponent extends React.Component {
	constructor(props){
		super(props);

		this.state = { ...this.props.wantState };

	  this.changeCalories = this.changeCalories.bind(this);
	  this.changeIngreds = this.changeIngreds.bind(this);
		this.submitState = this.submitState.bind(this);
	  }

	changeCalories(value, name){
		this.setState({[name]:value});
	}

	changeIngreds(name){
		let userIngreds;
		if (this.state.ingreds.includes(name)){
			userIngreds = this.state.ingreds.filter((elt) => elt !== name);
		}	else {
			userIngreds = [...this.state.ingreds, name];
		}
		this.setState({ingreds:userIngreds});
	}

	submitState(){
		this.props.onStateSaveRequest(this.state);
		this.props.onRequestSaveRequest(calcQueryWant(this.state, PARAMS, INGREDS));
	}

	componentWillUnmount(){
		this.submitState();
	}

	render(){
		return(
			<div>
				<div className="container-fluid backgrWant">
					<div className="container">
						<div className="col col-xs-12 col-md-8 col-md-push-2 main_box">
						  <h2>What are your cooking ideas?</h2>
						  <WantIngredFilter initState={this.state.ingreds} changeIngreds={this.changeIngreds}/>
							<WantRangeFilter initState={this.state} changeCalories={this.changeCalories}/>
							<div className='want'>
					    	<LinkComponent name='SEE SEARCH RESULTS!' value='/recipes' />
							</div>
					</div>
				</div>
			</div>
		</div>
		)
  }
}

export default WantComponent;
