import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Header from "./features/Header/Header";
import Subreddits from "./features/Subreddits/Subreddits";
import Feed from "./features/Feed/Feed";
import PostPage from "./features/Post/PostPage";
import Scroll from "./components/Scroll/Scroll";

function App() {
  return (
    <Router>
      <div className="App">
        <Scroll />
        <Header />
        <section>
          <aside>
            <Subreddits />
          </aside>
          <main>
            <Switch>
              <Route path="/:subredditName" component={Feed} />
              <Route path="/posts/:postId" component={PostPage} />
              <Redirect to="/" />
            </Switch>
          </main>
        </section>
      </div>
    </Router>
  );
}

export default App;
