import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Container from './components/layout/Container';
import Details from './components/layout/Details';
import MovieList from './components/layout/Dashboard';
import NavBar from './components/layout/NavBar';
import './styles/index.scss';

const App = () => {
  return (
    <div id="App">
      <NavBar />
      <Container>
        <Switch>
          <Route exact path="/">
            <MovieList />
          </Route>
          <Route path="/details/:id">
            <Details />
          </Route>
        </Switch>
      </Container>
    </div>
  );
};

export default App;
