import React from 'react';


class SaveLinkButtonComponent extends React.Component {
	constructor(props){
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		this.props.saveLink();
  }

render(){
	const displayBut = this.props.display;
	let displayDiv = displayBut === 'none' ? 'block' : 'none';
	return(
		<div>
			<button style={{minWidth: '75px', margin: '5px 15px', fontSize: '1.3rem', fontWeight: 'bold', color: 'black', backgroundColor: 'lime', display: displayBut}} onClick={this.handleClick}>SAVE LINK</button>
			<div style={{display: displayDiv, margin: '5px 15px', fontSize: '1.3rem'}}>The link is saved</div>
		</div>
		)
	}
}

export default SaveLinkButtonComponent;
