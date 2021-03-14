import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, } from 'react-router-dom';
import './App.css'
import Header from './features/Header/Header'
import Subreddits from './features/Subreddits/Subreddits'
import Feed from './features/Feed/Feed'
import Post from './features/Post/Post'

function App() {
  return (
      <Router>
        <div className="App">
          <Header />
          <section>
            <aside>
              <Subreddits />
            </aside>
            <main>
              <Switch>
                <Route exact path="/" render={() => (<Feed />)} />
                <Route exact path="/posts/:postId" component={Post} />
                <Redirect to="/" />
              </Switch>
            </main>
          </section>
        </div>
      </Router>
  )
}

export default App
