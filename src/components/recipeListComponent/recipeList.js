import React from 'react';
import { v4 } from 'node-uuid';
import LinkComponent from '../linkComponent';
// eslint-disable-next-line
import style from './recipeListStyle.css';

class recipeListComp extends React.Component {
  constructor(){
    super();

    this.state = {
      loadButtonState: 'block',
      topRatedButtonState: 'none'
    }

		this.handleClick = this.handleClick.bind(this);
    this.changeLoadButtonState = this.changeLoadButtonState.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }
  handleClick() {
    const queryFromWant = this.props.queryFromWant;
    const queryFromHave = this.props.queryFromHave;
    const recipePage = this.props.recipePage;
    //console.log('this.props.queryFromWant.length < 1 && this.props.queryFromHave.length', queryFromWant, queryFromHave)
    try {
      if (!queryFromWant.length && !queryFromHave){
        this.changeLoadButtonState();
      }
      else if (queryFromWant.length && !queryFromHave) {
        const ingred0 = queryFromWant[recipePage][0];
        const ingred1 = queryFromWant[recipePage][1];
        //console.log('ingreds from WANT', ingred0,ingred1);
        if (this.props.recipePage >= this.props.queryFromWant.length - 1 ) {
          this.changeLoadButtonState();
          }
        this.props.loadRecipes(ingred0,ingred1,1);
        this.props.incremPage();
      }
      else if (queryFromHave.length && !queryFromWant.length) {
        const ingred0 = queryFromHave[recipePage][0];
        const ingred1 = queryFromHave[recipePage][1];
        //console.log('ingreds from HAVE', ingred0,ingred1);
        if (this.props.recipePage >= this.props.queryFromHave.length - 1 ) {
          this.changeLoadButtonState();
          }
        this.props.loadRecipes(ingred0,ingred1,1);
        this.props.incremPage();
      }
      else {
        const ingred0 = queryFromWant[recipePage][0];
        const ingred1 = queryFromWant[recipePage][1];
        //console.log('When both queries', ingred0,ingred1);
        if (this.props.recipePage >= this.props.queryFromWant.length - 1 ) {
          this.changeLoadButtonState();
          }
        this.props.loadRecipes(ingred0,ingred1,1);
        this.props.incremPage();
      }
    }
    catch (e){
      this.changeLoadButtonState();
    }
  }

  changeLoadButtonState() {
    this.setState({loadButtonState: 'none'});
    this.setState({topRatedButtonState: 'block'});
  }

  componentWillMount() {
    if (!this.props.recipeList.length){
      this.props.loadRecipes('meat','veg',1);
    }
	}

  componentWillUnmount() {
    this.props.clearPage();
  }

  clearSearch(){
    this.props.clearSearch();
  }


  render() {
    const recipeList = this.props.recipeList;
    //const recipeCount = this.props.recipeCount;
    let loadButtonState = this.state.loadButtonState;
    let topRatedButtonState = this.state.topRatedButtonState;
    return (
    	<div className='backgrRecipeList'>
        {recipeList.map(({publisher, publisher_url, source_url, social_rank, recipe_id, title, image_url}, key) => {
          return (
            <div key={`${recipe_id}-${v4()}`} className='recipeList' >
              <LinkComponent value={`/recipes/${recipe_id}`} name={title}/>
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

        <button style={{display: `${loadButtonState}`}} onClick={this.handleClick}>LOAD MORE RECIPES</button>
        <span style={{color: 'mediumpurple', display: `${topRatedButtonState}`}}>
          <LinkComponent name='GO TO TOP RATED?' value='/top' /></span>
        <span style={{color: 'pink', display: `${topRatedButtonState}`}} onClick={this.clearSearch}>
          <LinkComponent name='CLEAR & GO TO WANT ->' value='/want' /></span>
        <span style={{color: 'lime', display: `${topRatedButtonState}`}} onClick={this.clearSearch}>
          <LinkComponent name='CLEAR & GO TO HAVE ->' value='/have' /></span>
        {/* <div>this.props.recipePage {this.props.recipePage}</div>
        <div>recipeCount {recipeCount}</div> */}

      </div>
	)
  }
}

export default recipeListComp;
