import React from 'react';
import PRODUCTS from '../../../../utils/products.js';
const FRIDGE = PRODUCTS[0];
const KEYS = Object.keys(FRIDGE.value);

class HaveFridgeFilter extends React.Component{
  constructor(props){
	super(props);

  this.state = {
		haveFridge: this.props.initState
		};

		this.handleCheck = this.handleCheck.bind(this);
  	this.handleCheckAll = this.handleCheckAll.bind(this);
    this.toggleTxt = this.toggleTxt.bind(this);
	}

	handleCheckAll(e){
    let value = e.target.checked;
    if (value) {
    this.setState({haveFridge: KEYS});
    this.props.changeHave('haveFridge', KEYS);
    } else {
    this.setState({haveFridge: []});
    this.props.changeHave('haveFridge', []);
    }
	}

	handleCheck(e){
    let productName = e.target.name;
    let value = e.target.checked;
    let selectedProd;
    if (value) {
      selectedProd = [...this.state.haveFridge, productName];
    } else {
      selectedProd = this.state.haveFridge.filter((elt) => elt !== productName)
    }
      this.setState({haveFridge: selectedProd});
      this.props.changeHave('haveFridge', selectedProd);
  }

  toggleTxt(){
    if(this.state.haveFridge.length === KEYS.length){
    return 'Uncheck All'}
    else{
    return 'Check All'}
  }

	render(){
	return (
		<div>
		<ul>
		<li>
      <input type="checkbox" name="checkall"
			checked={this.state.haveFridge.length === KEYS.length}
			onChange={this.handleCheckAll}/>{this.toggleTxt()}
		</li>
		  {KEYS.map((elt, key) => (
			<li key={`prod-${key}`}>
			<input type="checkbox" name={elt}
				checked={this.state.haveFridge.includes(elt)}
				onChange={this.handleCheck}/>
				{FRIDGE.value[elt]}
				</li>
				))}
			</ul>
		</div>
		)
	}
}


export default HaveFridgeFilter;
