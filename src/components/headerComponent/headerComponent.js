import React from 'react';
//import { connect } from 'dva';
import NavComponent from './components/navBar'

const HeaderComponent = (props) => (
    <div>
      <NavComponent displayBottomTxt={props.displayBottomTxt}/>
    </div>

)

export default HeaderComponent;
