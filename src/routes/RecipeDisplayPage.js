import React from 'react';

import RecipeDisplayComponent from '../components/recipeDisplayComponent';

class RecipeDisplayPage extends React.Component {
  render(){
    return (
      <div>
        <RecipeDisplayComponent url={this.props.location.pathname.slice(9)} caller={this.props.location.pathname.slice(1,8)}/>
      </div>
    )
  }
}

export default RecipeDisplayPage;
