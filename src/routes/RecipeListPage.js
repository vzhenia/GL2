import React from 'react';

import RecipeListComponent from '../components/recipeListComponent';

class recipeListPage extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
		super(props);
  }
  render(){

    return (
      <div>
        <div>
          <RecipeListComponent />
        </div>

        <div className='childRecipe'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default recipeListPage;
