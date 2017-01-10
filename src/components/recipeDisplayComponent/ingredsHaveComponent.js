import React from 'react';

class IngredsHaveComponent extends React.Component {
	constructor(props){
		super(props);
		this.handleCheck = this.handleCheck.bind(this);
	}

	handleCheck(e){
	    let productName = e.target.name;
	    this.props.toggleIngred('userCheckedHave', productName);
	  }

	render(){
		return(
			<div>
				<h4 style={{color: 'lime', fontWeight: 'bold', margin: '0px 10px'}}>Ingredients marked as available:</h4>
				<ul>
					{this.props.ingredsHave.map((elt, key) => (
					<li key={`ingredsHave-${key}`} style={{listStyle: 'none'}}>
					<input type="checkbox" name={elt}
						checked={this.props.ingredsHave.includes(elt)}
						onChange={this.handleCheck}/>
						{elt}
						</li>
						))}
				</ul>
			</div>
		)
  }
}

export default IngredsHaveComponent;
