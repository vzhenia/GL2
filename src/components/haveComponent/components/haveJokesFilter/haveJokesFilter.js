import React from 'react';
import JOKES from '../../../../utils/jokes.js';

const KEYS = Object.keys(JOKES);

export default () => {
  return (
   <div>
    <div>
    <h3 style={{color:'yellow'}}>SMILE!</h3>
      {JOKES[Math.floor(Math.random()*KEYS.length)]}
    </div>
    <a style={{color: 'magenta'}} href='http://www.jokes4us.com/' target='_blank'><i>Source: www.jokes4us.com</i></a>
   </div>
  )
}
