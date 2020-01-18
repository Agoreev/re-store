import React from "react";
import Header from "../header";
import "./app.css";
import { Route, Switch } from "react-router-dom";
import { BooksPage, CartPage } from "../pages";

const App = () => {
  return (
    <div className="app container">
      <Header />
      <Switch>
        <Route path="/" exact render={() => <h2>Welcome to redux store</h2>} />
        <Route path="/books" component={BooksPage} exact />
        <Route path="/cart" component={CartPage} exact />
        <Route render={() => <h2>Page not found</h2>} />
      </Switch>
    </div>
  );
};

export default App;
