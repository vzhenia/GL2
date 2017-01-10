import React from 'react';
import PRODUCTS from '../../../../utils/products.js';
const MEAT = PRODUCTS[1];
const KEYS = Object.keys(MEAT.value);

class HaveMeatFilter extends React.Component{
	constructor(props){
	super(props);

	this.state = {
		haveMeat: this.props.initState
		};

	this.handleCheck = this.handleCheck.bind(this);
  this.handleCheckAll = this.handleCheckAll.bind(this);
  this.toggleTxt = this.toggleTxt.bind(this);
	}

	handleCheckAll(e){
  let value = e.target.checked;
  if (value) {
  this.setState({haveMeat: KEYS});
  this.props.changeHave('haveMeat', KEYS);
  } else {
  this.setState({haveMeat: []});
  this.props.changeHave('haveMeat', []);
  }
	}

	handleCheck(e){
  let productName = e.target.name;
  let value = e.target.checked;
	let selectedProd;
	if (value) {
		selectedProd = [...this.state.haveMeat, productName];
	} else {
		selectedProd = this.state.haveMeat.filter((elt) => elt !== productName)
	}
  	this.setState({haveMeat: selectedProd});
		this.props.changeHave('haveMeat', selectedProd);
	}

  toggleTxt(){
	  if(this.state.haveMeat.length === KEYS.length){
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
        checked={this.state.haveMeat.length === KEYS.length}
				onChange={this.handleCheckAll}/>{this.toggleTxt()}
				</li>
			{KEYS.map((elt, key) => (
			<li key={`meat-${key}`}>
				<input type="checkbox" name={elt}
				checked={this.state.haveMeat.includes(elt)}
				onChange={this.handleCheck}/>
        {MEAT.value[elt]}
			</li>
			))}
			</ul>
		</div>
		)
	}
}

export default HaveMeatFilter;
