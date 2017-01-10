import React from 'react';

import TopRatedListComponent from '../components/topRatedListComponent';

class TopRatedPage extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
		super(props);
  }
  render(){

    return (
      <div>
        <div>
          <TopRatedListComponent />
        </div>

        <div className='childRecipe'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default TopRatedPage;
