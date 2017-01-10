import React from 'react';
import LinkComponent from '../linkComponent';
import { v4 } from 'node-uuid';
// eslint-disable-next-line
import style from './indexStyle.css'

class indexView extends React.Component{
	// eslint-disable-next-line
	constructor(props){
	   super(props);
  }
  componentWillMount(){
		if (!this.props.topRatedList.length){
      this.props.loadTopRated(this.props.topRatedPage);
    }

  }
  render(){
		const topRatedList = this.props.topRatedList;

    return (
      <div className="container-fluid backgrIndex">
        <div className="container" style={{marginTop: '150px',maxWidth: '700px'}}>
          <button className='btn btn-default left indexBtnLeft' ><div>Start With</div><div><LinkComponent value='/want' name='What I Want'/></div></button>
          <button className='btn btn-default right indexBtnRight'><div>Start With</div><div><LinkComponent value='/have' name='What I Have'/></div></button>
        </div>
        <div className="margContainer" style={{marginTop: '30px'}}>
          <h2 id='indexViewH'>Our Choice of Top Rated Recipes</h2>
        </div>

        <div style={{maxWidth: '600px', minHeight: '370px', height: '370px', margin: 'auto'}}>
          <div id="carousel-top" className="carousel slide" data-ride="carousel" style={{maxWidth: '600px', height: '370px'}}>

            <div className="carousel-inner">

						<div className="item active" >
							<img alt="First" src="http://static.food2fork.com/Buffalo2BChicken2BGrilled2BCheese2BSandwich2B5002B4983f2702fe4.jpg" style={{maxHeight: '220px', margin: 'auto'}}/>
							<div className="carousel-caption">
								<h3>Buffalo Chicken Grilled Cheese Sandwich</h3>
							</div>
						</div>

						{topRatedList.map(({recipe_id, title, image_url}) => {
							return (
								<div key={`toprated-${recipe_id}-${v4()}`} className='item'>
									<LinkComponent value={`/toprate/${recipe_id}`} name={title}/>
										<img src={image_url} alt={recipe_id} style={{maxHeight: '220px', margin: 'auto'}}/>
										<div className="carousel-caption">
		                  <h3>{title}</h3>
		                </div>
								</div>
							)}
						)}
						</div>

            <a className="left carousel-control" href="#carousel-top" data-slide="prev" style={{height: '350px'}}>
              <span className="glyphicon glyphicon-chevron-left"></span>
            </a>
            <a className="right carousel-control" href="#carousel-top" data-slide="next" style={{height: '350px'}}>
              <span className="glyphicon glyphicon-chevron-right"></span>
            </a>
          </div>
        </div>
      </div>
    )}
}

export default indexView;
