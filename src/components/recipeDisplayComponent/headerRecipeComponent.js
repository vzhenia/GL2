import React from 'react';

class HeaderRecipeComponent extends React.Component {
	// eslint-disable-next-line
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div>
				<h4 style={{color: 'magenta', margin: '0px 10px'}}>{this.props.rTitle}</h4>
				<div style={{margin: '0px 10px', display: 'inline-block', border: `none`,height: `80px`, width: `80px`, padding: `3px`}}>
					<img style={{height: `75px`, width: `75px`, border: `2px solid green`, borderRadius: `5px`}}
						 src={this.props.rImgUrl} alt={this.props.rID}/>
				</div>
				<div style={{display: 'inline-block', margin: '0px 10px'}}>
					<span>Source:</span>
					<a href={this.props.rPublisherUrl} target='_blank'>{this.props.rPublisher}</a><br/>
					<span>Rank:</span>{this.props.rRank}
				</div>


				</div>
			)
	  }
}

export default HeaderRecipeComponent;
