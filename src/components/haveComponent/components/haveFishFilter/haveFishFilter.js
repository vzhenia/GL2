import React from 'react';
import PRODUCTS from '../../../../utils/products.js';
const FISH = PRODUCTS[3];
const KEYS = Object.keys(FISH.value);

class HaveFishFilter extends React.Component{
	constructor(props){
	super(props);

	this.state = {
		haveFish: this.props.initState
		};

	this.handleCheck = this.handleCheck.bind(this);
  this.handleCheckAll = this.handleCheckAll.bind(this);
  this.toggleTxt = this.toggleTxt.bind(this);
	}

	handleCheckAll(e){
  let value = e.target.checked;
  if (value) {
  this.setState({haveFish: KEYS});
  this.props.changeHave('haveFish', KEYS);
  } else {
  this.setState({haveFish: []});
  this.props.changeHave('haveFish', []);
  }
	}

	handleCheck(e){
  let productName = e.target.name;
  let value = e.target.checked;
	let selectedProd;
	if (value) {
		selectedProd = [...this.state.haveFish, productName];
	} else {
		selectedProd = this.state.haveFish.filter((elt) => elt !== productName)
	}
  	this.setState({haveFish: selectedProd});
		this.props.changeHave('haveFish', selectedProd);
	}

  toggleTxt(){
	  if(this.state.haveFish.length === KEYS.length){
	  return 'Uncheck All'}
	  else{
	  return 'Check All'}
	  }

	render(){
	return (
		<div>
		<ul>
		<li>
      <input type="checkbox" name='checkall'
        checked={this.state.haveFish.length === KEYS.length}
				onChange={this.handleCheckAll}/>{this.toggleTxt()}
				</li>
			{KEYS.map((elt, key) => (
			<li key={`meat-${key}`}>
				<input type="checkbox" name={elt}
				checked={this.state.haveFish.includes(elt)}
				onChange={this.handleCheck}/>
        {FISH.value[elt]}
			</li>
			))}
			</ul>
		</div>
		)
	}
}

export default HaveFishFilter;
