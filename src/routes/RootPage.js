import React from 'react';
import { connect } from 'react-redux';
import LinkComponent from '../components/linkComponent';
import { requestTopRatedList } from '../actions/topRatedListActionCreators.js';;


import HeaderComponent from '../components/headerComponent';


class RootComponent extends React.Component {

  componentWillMount(){
    this.props.loadTopRated(this.props.topRatedPage);
  }
  render(){
    const { location } = this.props;
    const collapsedClass = location.pathname === '/' ? {} : {display: "none"};
    const displayBottomTxt = location.pathname.slice(1);
    console.log('displayBottomTxt')
    return(
      <div>
      <HeaderComponent displayBottomTxt={displayBottomTxt}/>
      <div className='container' style={collapsedClass}>
        <h3 style={{marginTop: '150px'}}>Welcome to GL!</h3>

        This is a simple application which is designed<br/>
        to look for recipes and help to compose a grocery list.<br/>
        It runs on top of Food2Fork.com public api (api key needed).<br/>

        <h4><b>You have 3 options:</b></h4>
        1) Start with what you <span style={{backgroundColor: 'magenta'}}><LinkComponent value='/want' name='WANT'/></span> - search for recipe based on your mood.<br/>
        2) Start with what you <span style={{backgroundColor: 'darkgreen'}}><LinkComponent value='/have' name='HAVE'/></span> - search for recipe based on state of your fridge.<br/>
        3) Trust our choice of <span style={{backgroundColor: 'mediumpurple'}}><LinkComponent value='/toprate' name='TOP RATED'/></span> Recipes.<br/>
        <h3>Good luck!</h3>
      </div>
      {this.props.children}
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    topRatedList: state.topRatedList.topRatedList,
    topRatedCount: state.topRatedList.topRatedCount,
    topRatedPage: state.topRatedList.topRatedPage
  }
}

const mapDispatchToProps = (dispatch) => {
	return {
     loadTopRated: (p) => dispatch(requestTopRatedList(p))
	}}

const rootContainer = connect(mapStateToProps,mapDispatchToProps)(RootComponent);

export default rootContainer;
