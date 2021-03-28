import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, } from 'react-router-dom';
import './App.css'
import Header from './features/Header/Header'
import Subreddits from './features/Subreddits/Subreddits'
import Feed from './features/Feed/Feed'
import PostPage from './features/Post/PostPage'

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
                <Route exact path="/" component={Feed} />
                <Route exact path="/posts/:postId" component={PostPage} />
                <Redirect to="/" />
              </Switch>
            </main>
          </section>
        </div>
      </Router>
  )
}

export default App
