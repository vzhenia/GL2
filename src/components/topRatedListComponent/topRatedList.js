import React from 'react';
import { v4 } from 'node-uuid';
import LinkComponent from '../linkComponent';
// eslint-disable-next-line
import style from './topRatedListStyle.css';

class TopRatedListComponent extends React.Component {
  constructor(){
    super();

    this.state = {
      loadButtonState: 'block'
    }

		this.handleClick = this.handleClick.bind(this);
    this.changeLoadButtonState = this.changeLoadButtonState.bind(this);
  }
  handleClick() {
    const topRatedPage = this.props.topRatedPage;
    this.props.loadTopRated(topRatedPage);
    }

  changeLoadButtonState() {
    this.setState({loadButtonState: 'none'});
  }

  componentWillMount() {
    if (!this.props.topRatedList.length){
      this.props.loadTopRated(this.props.topRatedPage);
    }
	}

  render() {
    const topRatedList = this.props.topRatedList;
    let loadButtonState = this.state.loadButtonState;

    return (
    	<div className='backgrTopRatedList'>
        {topRatedList.map(({publisher, publisher_url, source_url, social_rank, recipe_id, title, image_url}, key) => {
          return (
            <div key={`${recipe_id}-${v4()}`} className='recipeList' >
              <LinkComponent value={`/toprate/${recipe_id}`} name={title}/>
              <div>
                <div className='recipeListCont'>
                <div style={{display: 'block'}}>
                  <img src={image_url} className='recipeImg' alt={recipe_id}/>
                </div>
                <div style={{display: 'block', textAlign: 'left'}}>
                  <a className='recipeListLink' href={source_url} target='_blank'>
                    <span style={{color: 'white'}}>Link to the original resource:</span><br/>
                    {publisher}<br/>
                    {publisher_url}
                  </a>
                </div>
              </div>
            </div>
          </div>
          )}
        )}

        <button style={{display: `${loadButtonState}`}} onClick={this.handleClick}>LOAD MORE TOP RATED RECIPES</button>
      </div>
	)
  }
}

export default TopRatedListComponent;
