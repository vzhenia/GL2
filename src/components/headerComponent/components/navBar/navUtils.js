import React from 'react';

// eslint-disable-next-line
import style from './navStyle.css';

export class NavTopContainer extends React.Component {
  // eslint-disable-next-line
  constructor(props){
    super(props);
  }
    render(){
    return (
    <div style={{color: '#00ffff', fontWeight: 'bold'}}
      className="navbar-toggle collapsed pull-left linksContainer"
      data-toggle="collapse">
      {this.props.topContainerTxt}
    </div>
    )
  }
}

export class NavBottomContainer extends React.Component {
  // eslint-disable-next-line
  constructor(props){
    super(props);
    }
    render(){
      const { bottomContainerTxt } = this.props;
      return (
        <div style={{color: 'lime'}} className="navbar-toggle collapsed pull-left linksContainer">
          <span >You are currently at:</span><br/>
          <span>{bottomContainerTxt}</span>
        </div>
      )
  }
}


export class HamburgerButton extends React.Component {
  constructor(props){
    super(props);
    this.toggleButton = this.toggleButton.bind(this);
  }

  toggleButton(e){
    e.preventDefault();
    this.props.toggleMenu();
  }

  render(){
    return (
      <button type="button" onClick={this.toggleButton}
        className="navbar-toggle collapsed pull-left smallButton"
        data-toggle="collapse" data-target="#bsNav" aria-expanded="false">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
    )
  }
}
export class BackButton extends React.Component {
  // eslint-disable-next-line
  constructor(props){
    super(props);
  }

  render(){
    return (
      <button type="button"
        className="navbar-toggle collapsed pull-left smallButton"
        aria-expanded="false">
        <span className="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>
      </button>
    )
  }
}
