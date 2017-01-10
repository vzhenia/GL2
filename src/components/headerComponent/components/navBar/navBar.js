import React from 'react';
import LinkComponent from '../../../linkComponent';
import { HamburgerButton } from './navUtils.js';
import { BackButton } from './navUtils.js';
import { NavTopContainer } from './navUtils.js';
import { NavBottomContainer } from './navUtils.js';
// eslint-disable-next-line
import style from './navStyle.css';
import MENU from '../../../../utils/menu.js'


class NavComponent extends React.Component{
	constructor(props){
	super(props);

	this.state = {
    collapse: true,
    topContainerTxt: "GROCERY LIST COMPOSER",
    bottomContainerTxt: this.props.displayBottomTxt
  	};

		this.toggleMenu = this.toggleMenu.bind(this);
    }

	toggleMenu(){
	  this.setState({collapse: !this.state.collapse});
	  }

  render(){
		const { collapse } = this.state;
    const menuView = collapse ? 'collapse hidden' : '';

    return (
			<nav className="navbar navbar-default navbar-fixed-top navDefault">
		    <div className="container-fluid">
		      <div className="navbar-header">
		        <HamburgerButton toggleMenu={this.toggleMenu}/>
		        <NavTopContainer topContainerTxt={this.state.topContainerTxt}/>
		      </div>
		      <div className="navbar-header">
		        <BackButton />
		        <NavBottomContainer bottomContainerTxt={this.state.bottomContainerTxt}/>
		      </div>

		    	<div className={"navbar-collapse " + menuView} id="bsNav" >
			      <ul className="nav navbar-nav" onMouseLeave={this.toggleMenu} >
			        {MENU.map(({value, name}, key) => (
			          <LinkComponent key={`menuItem-${key}`} name={name} value={value} />
		        ))}

		      </ul>
		    </div>
		  </div>
		</nav>
      )
  }
}

export default NavComponent;
