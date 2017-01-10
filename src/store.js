import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import Reducers from './reducers';
//import { loadState, saveState } from './utils/localStorage.js'

const middleware = [];
middleware.push(thunk);
if (process.env.NODE_ENV === 'development'){
  const logger = createLogger();
  middleware.push(logger);
}

//const persistedState = loadState();
//const store = createStore(Reducers, persistedState, applyMiddleware(...middleware));
const store = createStore(Reducers, applyMiddleware(...middleware));


store.subscribe(()=>{
  //saveState(store.getState());
  console.log('Store has changed', store.getState());
  }
)

export default store;
