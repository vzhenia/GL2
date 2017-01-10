import React from 'react';

import SavedLinksComponent from '../components/savedLinksComponent';

class savedLinksPage extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
		super(props);
  }
  render(){

    return (
      <div>
        <div>
          <SavedLinksComponent />
        </div>

        <div className='childRecipe'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default savedLinksPage;
