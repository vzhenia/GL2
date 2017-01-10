import React, { Component } from 'react';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import logo from './logo.svg';

import RootPage from './routes/RootPage.js';
import RecipeListPage from './routes/RecipeListPage.js';
import RecipeDisplayPage from './routes/RecipeDisplayPage.js';
import WantPage from './routes/WantPage.js';
import HavePage from './routes/HavePage.js';
import IndexPage from './routes/IndexPage.js';
import SavedLinksPage from './routes/SavedLinksPage.js';
import TopRatedPage from './routes/TopRatedPage.js';
import PokemonListPage from './routes/PokemonListPage.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={RootPage}>
          <IndexRoute component={()=>(<div><img src={logo} className="App-logo" alt="logo" /></div>)}/>
            <Route path="index" component={IndexPage}/>
            <Route path="recipes" component={RecipeListPage}>
              <Route path="/recipes/:recipe_id" component={RecipeDisplayPage}/>
            </Route>
            <Route path="want" component={WantPage}/>
            <Route path="have" component={HavePage}/>
            <Route path="mylinks" component={SavedLinksPage} >
              <Route path="/mylinks/:recipe_id" component={RecipeDisplayPage}/>
            </Route>
            <Route path="toprate" component={TopRatedPage} >
              <Route path="/toprate/:recipe_id" component={RecipeDisplayPage}/>
            </Route>
            <Route path="pokemons" component={PokemonListPage}/>
            <Route path="*" component={()=>(<div>404 - Page is not matched</div>)}/>
          </Route>
      </Router>
    )
  }


}

export default App;
