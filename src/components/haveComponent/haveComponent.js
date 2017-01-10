import React from 'react';

import HaveFridgeFilter from './components/haveFridgeFilter';
import HaveMeatFilter from './components/haveMeatFilter';
import HavePolloFilter from './components/havePolloFilter';
import HaveFishFilter from './components/haveFishFilter';
import HaveVegesFilter from './components/haveVegesFilter';
import HaveJokesFilter from './components/haveJokesFilter';
import LinkComponent from '../linkComponent';

import { calcQueryHave } from '../../utils/functions.js';
import PRODUCTS from '../../utils/products.js';
// eslint-disable-next-line
import style from './haveStyle.css';

class HaveComponent extends React.Component{
	constructor(props){
	super(props);

	this.state = { ...this.props.haveState };

    this.changeHave = this.changeHave.bind(this);
		this.submitState = this.submitState.bind(this);
    }

    changeHave(name, userHas){
			this.setState({[name]:userHas});
		}

		submitState(){
			this.props.onStateSaveRequest(this.state);
			this.props.onRequestSaveRequest(calcQueryHave(this.state));
		}

		componentWillUnmount(){
			this.submitState();
		}

  render(){
  	return(
    <div>
		<div className="container-fluid backgr">
		<div className="container">

			<div className="col col-xs-12 col-md-8 col-md-push-2 main_box">
			<h2>What's in your fridge?</h2>
			  <div className="col col-xs-4">
				    <ul className="nav nav-tabs nav-stacked text-center" role="tablist">
						{PRODUCTS.map(({type, display, cl}, key) => {
							return (
								<li role="presentation" className={cl} key={`tab-key${key}`}><a href={`#${type}`} role="tab" data-toggle="tab">{display}</a></li>
							)
						})}
						</ul>
		      </div>

		     <div className="col col-xs-8 tab-content">
		        <div role="tabpanel" className="tab-pane fade active in" id="fridge">
		          <HaveFridgeFilter initState={this.state.haveFridge} changeHave={this.changeHave}/>
		       </div>
		       <div role="tabpanel" className="tab-pane fade" id="meat">
		          <HaveMeatFilter initState={this.state.haveMeat} changeHave={this.changeHave}/>
		       </div>
		       <div role="tabpanel" className="tab-pane fade" id="pollo">
		          <HavePolloFilter initState={this.state.havePollo} changeHave={this.changeHave}/>
		       </div>
					 <div role="tabpanel" className="tab-pane fade" id="fish">
		          <HaveFishFilter initState={this.state.haveFish} changeHave={this.changeHave}/>
		       </div>
					 <div role="tabpanel" className="tab-pane fade" id="veges">
		          <HaveVegesFilter initState={this.state.haveVeges} changeHave={this.changeHave}/>
		       </div>
					 <div role="tabpanel" className="tab-pane fade" id="jokes">
		          <HaveJokesFilter />
		       </div>
		     </div>
				 <div className='have'>
	 			 	<LinkComponent name='SEE SEARCH RESULTS!' value='/recipes' />
	 			</div>
			</div>

		</div>
	</div>
	</div>
    )
    }
  }

  export default HaveComponent;
