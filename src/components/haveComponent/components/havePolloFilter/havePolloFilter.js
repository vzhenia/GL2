import React from 'react';
import PRODUCTS from '../../../../utils/products.js';
const POLLO = PRODUCTS[2];
const KEYS = Object.keys(POLLO.value);

class HavePolloFilter extends React.Component{
  constructor(props){
	super(props);

  this.state = {
		havePollo: this.props.initState
		};

		this.handleCheck = this.handleCheck.bind(this);
  	this.handleCheckAll = this.handleCheckAll.bind(this);
    this.toggleTxt = this.toggleTxt.bind(this);
	}

	handleCheckAll(e){
    let value = e.target.checked;
    if (value) {
    this.setState({havePollo: KEYS});
    this.props.changeHave('havePollo', KEYS);
    } else {
    this.setState({havePollo: []});
    this.props.changeHave('havePollo', []);
    }
	}

	handleCheck(e){
    let productName = e.target.name;
    let value = e.target.checked;
    let selectedProd;
    if (value) {
      selectedProd = [...this.state.havePollo, productName];
    } else {
      selectedProd = this.state.havePollo.filter((elt) => elt !== productName)
    }
      this.setState({havePollo: selectedProd});
      this.props.changeHave('havePollo', selectedProd);
  }

  toggleTxt(){
    if(this.state.havePollo.length === KEYS.length){
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
			checked={this.state.havePollo.length === KEYS.length}
			onChange={this.handleCheckAll}/>{this.toggleTxt()}
		</li>
		  {KEYS.map((elt, key) => (
			<li key={`prod-${key}`}>
			<input type="checkbox" name={elt}
				checked={this.state.havePollo.includes(elt)}
				onChange={this.handleCheck}/>
				{POLLO.value[elt]}
				</li>
				))}
			</ul>
		</div>
		)
	}
}


export default HavePolloFilter;
