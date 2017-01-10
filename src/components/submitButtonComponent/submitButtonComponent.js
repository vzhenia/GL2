import React from 'react';
// eslint-disable-next-line
import style from './submitButtonComponent.css'

class SubmitButtonComponent extends React.Component {
constructor(props){
	super(props);
	this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(){
		this.props.onButSubmit();
	}

	render(){
		return(
			<div>
			  <button onClick={this.handleSubmit}>NEXT =></button>
			</div>
		)
  }
}

export default SubmitButtonComponent;
