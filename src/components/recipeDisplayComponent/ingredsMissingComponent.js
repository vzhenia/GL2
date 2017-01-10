import React from 'react';

class IngredsMissingComponent extends React.Component {
	constructor(props){
		super(props);
		this.handleCheck = this.handleCheck.bind(this);
	}

handleCheck(e){
    let productName = e.target.name;
    this.props.toggleIngred('userCheckedMissing', productName);
  }
render(){
	return(
		<div>
			<h4 style={{color: 'magenta', fontWeight: 'bold', margin: '0px 10px'}}>Missing ingredients:</h4>
			<ul>
				{this.props.ingredsMissing.map((elt, key) => (
				<li key={`ingredsMissing-${key}`} style={{listStyle: 'none'}}>
					<input type="checkbox" name={elt}
						checked={this.props.ingredsMissing.includes(elt)}
						onChange={this.handleCheck}/>
					{elt}
				</li>
				))}
			</ul>
		</div>
	)
  }
}

export default IngredsMissingComponent;
