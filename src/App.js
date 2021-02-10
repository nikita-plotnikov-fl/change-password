import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import ChangePassword from "./pages/auth/ChangePassword";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <main className="app">
        <Router>
          <Switch>
            <Route exact path="/change-password" component={ChangePassword} />
          </Switch>
        </Router>
      </main>
    </Provider>
  );
};

export default App;
