import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { Navbar } from "./app/Navbar";
import { AddPostForm } from "./components/Posts/AddPostForm";
import { PostsList } from "./components/Posts/PostsList";
import { SinglePostPage } from "./components/Posts/SinglePostPage";
import { UpdatePostForm } from "./components/Posts/UpdatePostForm";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <section>
                <React.Fragment>
                  <AddPostForm />
                  <PostsList />
                </React.Fragment>
              </section>
            )}
          />
          <Route exact path="/posts/:postId" component={SinglePostPage} />
          <Route
            exact
            path="/posts/Update/:postId"
            component={UpdatePostForm}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
