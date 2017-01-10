import React from 'react';
import { v4 } from 'node-uuid';
import LinkComponent from '../linkComponent';
// eslint-disable-next-line
import style from './savedLinksStyle.css';

class SavedLinksComponent extends React.Component {
  // eslint-disable-next-line
  constructor(){
    super();
  }
  render(){
    return (
      <div className='backgrSavedLinks'>
        {this.props.savedLinks.map((elt) => {
          for (let i = 0; i < this.props.savedRecipes.length; i++){
            let saved = this.props.savedRecipes[i];

            if (elt === saved.recipe_id){
              return (
                <div className='savedLinks' key={`savedLink-${v4()}`} style={{marginTop: '50px'}}>
                  <div style={{margin: '0px 10px', display: 'inline-block', border: `none`,height: `80px`, width: `80px`, padding: `3px`}}>
                    <img style={{height: `75px`, width: `75px`, border: `2px solid green`, borderRadius: `5px`}}
                       src={saved.image_url} alt={saved.recipe_id}/>
                  </div>
                  <div style={{display: 'inline-block'}}>
                    <LinkComponent name={saved.title}
                      value={`/mylinks/${saved.recipe_id}`}/>
                    <a href={saved.source_url} target='_blank' style={{margin: '0px 13px', display: 'block', border: `none`}}><span>Source:{saved.publisher}</span></a>
                    </div>
                </div>
              )
            }
          }
        })}
      </div>
    )
  }
}
export default SavedLinksComponent;
