import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import './App.css'
import Header from './features/Header/Header'
import { Subreddits } from './features/Subreddits/Subreddits'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <header>
                  <Header />
                </header>
                <nav>
                  <Subreddits />
                </nav>
              </>
            )}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App
