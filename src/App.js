import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Header from "./features/Header/Header";
import SubredditsList from "./features/Subreddits/SubredditsList";
import Feed from "./features/Feed/Feed";
import PostPage from "./features/Post/PostPage";
import Scroll from "./components/Scroll/Scroll";
import Error from "./components/Error/Error";

function App() {
  return (
    <Router>
      <div className="App">
        <Scroll />
        <Header />
        <section>
          <aside>
            <SubredditsList />
          </aside>
          <main>
            <Switch>
              <Route exact path="/" component={Feed} />
              <Route exact path="/posts/:postId" component={PostPage} />
              <Route path="*" component={Error} />
              <Redirect to="/" />
            </Switch>
          </main>
        </section>
      </div>
    </Router>
  );
}

export default App;
