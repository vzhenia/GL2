import React from 'react';
import HeaderRecipeComponent from './headerRecipeComponent.js';
import IngredsHocComponent from './ingredsHocComponent.js';
import SaveLinkButtonComponent from './saveLinkButton.js'
// eslint-disable-next-line
import style from './recipeStyle.css';

class RecipeDisplayComponent extends React.Component {
	constructor(props){
	super(props);

	this.state = {
		recipe_id: ''
	}

  this.saveLink = this.saveLink.bind(this);

	}
  componentDidMount(){
		this.setState({recipe_id: this.props.url})
    this.props.loadOneRecipe(this.props.url, this.props.caller);
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.url !== this.state.recipe_id){
			this.setState({recipe_id: nextProps.url})

			//fetch if not fetched before, claim from savedRecipes if saved before
			if (!this.props.savedRecipesID.includes(nextProps.url)){
				this.props.loadOneRecipe(nextProps.url, nextProps.caller);
			} else {
				this.props.loadOneRecipe(nextProps.url, 'mylinks');
			}
    }
  }

  saveLink(){
    const id = this.props.recipe.recipe_id;
    const lst = this.props.savedLinks;
    function newLstCreator(lst, id){
      let newLst = lst.filter((elt) => elt !== id);
      newLst.push(id);
      return newLst;
      }
    let l = newLstCreator(lst, id)
    this.props.saveLinksToStore(l);
  }

render(){
  let rID = this.props.recipe.recipe_id;
  let rTitle = this.props.recipe.title;
  let rPublisher = this.props.recipe.publisher;
  let rPublisherUrl = this.props.recipe.publisher_url;
  //let rSourceUrl = this.props.recipe.source_url;
  let rRank = (parseFloat(this.props.recipe.social_rank)).toPrecision(4);
  let rImgUrl = this.props.recipe.image_url;
  let rIngreds = this.props.recipe.ingredients;
  let haveIngreds = this.props.haveState.haveRequest[1];
	let display = this.props.savedLinks.includes(rID) ? 'none' : 'block';
	
	return(
		<div >
			<HeaderRecipeComponent
				rTitle={rTitle}
				rPublisher={rPublisher}
				rPublisherUrl={rPublisherUrl}
				rRank={rRank}
				rImgUrl={rImgUrl}/>
      <SaveLinkButtonComponent rID={rID} saveLink={this.saveLink} display={display}/>
			<IngredsHocComponent
				rIngreds={rIngreds}
				haveIngreds={haveIngreds}/>

		</div>
		)
  }
}

export default RecipeDisplayComponent;
