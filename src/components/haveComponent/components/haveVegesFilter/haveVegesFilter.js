import React from 'react';
import PRODUCTS from '../../../../utils/products.js';
const VEGES = PRODUCTS[4];
const KEYS = Object.keys(VEGES.value);

class HavePolloFilter extends React.Component{
  constructor(props){
	super(props);

  this.state = {
		haveVeges: this.props.initState
		};

		this.handleCheck = this.handleCheck.bind(this);
  	this.handleCheckAll = this.handleCheckAll.bind(this);
    this.toggleTxt = this.toggleTxt.bind(this);
	}

	handleCheckAll(e){
    let value = e.target.checked;
    if (value) {
    this.setState({haveVeges: KEYS});
    this.props.changeHave('haveVeges', KEYS);
    } else {
    this.setState({haveVeges: []});
    this.props.changeHave('haveVeges', []);
    }
	}

	handleCheck(e){
    let productName = e.target.name;
    let value = e.target.checked;
    let selectedProd;
    if (value) {
      selectedProd = [...this.state.haveVeges, productName];
    } else {
      selectedProd = this.state.haveVeges.filter((elt) => elt !== productName)
    }
      this.setState({haveVeges: selectedProd});
      this.props.changeHave('haveVeges', selectedProd);
  }

  toggleTxt(){
    if(this.state.haveVeges.length === KEYS.length){
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
			checked={this.state.haveVeges.length === KEYS.length}
			onChange={this.handleCheckAll}/>{this.toggleTxt()}
		</li>
		  {KEYS.map((elt, key) => (
			<li key={`prod-${key}`}>
			<input type="checkbox" name={elt}
				checked={this.state.haveVeges.includes(elt)}
				onChange={this.handleCheck}/>
				{VEGES.value[elt]}
				</li>
				))}
			</ul>
		</div>
		)
	}
}


export default HavePolloFilter;
