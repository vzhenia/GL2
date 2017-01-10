import React from 'react';
import IngredsHaveComponent from './ingredsHaveComponent.js';
import IngredsMissingComponent from './ingredsMissingComponent.js';
import difference from 'lodash/difference';

class IngredsHocComponent extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			userCheckedHave: [],
			userCheckedMissing: []
		}
		this.toggleIngred = this.toggleIngred.bind(this);
	}

	componentWillMount() {
		const ingr=this.props.rIngreds; //list of strings
		const have=this.props.haveIngreds; //list of strings
		let selectedHave = [];
		let selectedMissing = [];

		if (!have) {
			selectedHave = [];
			for (let i=0; i<ingr.length;i++) {
				selectedMissing.push(ingr[i])
			}
		}
		else {
			for (let i=0; i<have.length;i++) {
				let arr = ingr.map((elt) => elt.toLowerCase().includes(have[i]));
				if (arr.find((elt) => elt === true) === true) {
					let index = arr.indexOf(true);
					selectedHave.push(ingr[index]);
				}
			}
		}
				this.setState({userCheckedHave: selectedHave});
				selectedMissing = difference(ingr, selectedHave);
				this.setState({userCheckedMissing: selectedMissing});
	}

	componentWillReceiveProps(nextProps){
    const ingr=nextProps.rIngreds; //list of strings
		const have=nextProps.haveIngreds; //list of strings
		let selectedHave = [];
		let selectedMissing = [];

		if (!have) {
			selectedHave = [];
			for (let i=0; i<ingr.length;i++) {
				selectedMissing.push(ingr[i])
			}
		}
		else {
			for (let i=0; i<have.length;i++) {
				let arr = ingr.map((elt) => elt.toLowerCase().includes(have[i]));
				if (arr.find((elt) => elt === true) === true) {
					let index = arr.indexOf(true);
					selectedHave.push(ingr[index]);
				}
			}
		}
				this.setState({userCheckedHave: selectedHave});
				selectedMissing = difference(ingr, selectedHave);
				this.setState({userCheckedMissing: selectedMissing});
	}

	toggleIngred(prop1, ingred){
		let inIngred, outIngred;
		let keys = Object.keys(this.state);
		let prop2 = keys.filter((elt) => elt !== prop1);
		outIngred = this.state[prop1].filter((elt) => elt !== ingred);
		inIngred = [ ...this.state[prop2], ingred];
		this.setState({[prop1]: outIngred, [prop2]: inIngred});
	}

	render(){
		return(
			<div>
				<IngredsHaveComponent
					ingredsHave={this.state.userCheckedHave}
					toggleIngred={this.toggleIngred}/>
				<IngredsMissingComponent
					ingredsMissing={this.state.userCheckedMissing}
					toggleIngred={this.toggleIngred}/>
			</div>
		)
	}
}

export default IngredsHocComponent;
