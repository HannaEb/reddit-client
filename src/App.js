import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import './App.css'
import Header from './features/Header/Header'
import { Subreddits } from './features/Subreddits/Subreddits'

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
                <Route exact Path="/">
                  {/* <Feed /> */}
                </Route>
              </Switch>
            </main>
          </section>
        </div>
      </Router>
  )
}

export default App
