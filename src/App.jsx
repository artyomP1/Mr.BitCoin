import React, { Component } from "react";
import HomePage from "./pages/HomePage/HomePage";
import ContactPage from "./modules/contact/pages/ContactPage";
import ContactDetailsPage from "./modules/contact/pages/ContactDetailsPage";
import ContactEditPage from "./modules/contact/pages/ContactEditPage";
import { StatisticPage } from "./pages/Statistic/StatisticPage";
import SignUpPage from "./modules/user/pages/SignUpPage";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { NavBar } from "./modules/common/cmps/NavBar.jsx";
// import "@/style/global.scss";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <Switch className="main">
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/" component={HomePage} />

          <Route exact path="/statistic" component={StatisticPage} />
          <Route exact path="/contacts" component={ContactPage} />
          <Route
            exact
            path="/contacts/edit/:_id?"
            component={ContactEditPage}
          />
          <Route exact path="/contacts/:_id" component={ContactDetailsPage} />
        </Switch>
        <footer className="App-footer"></footer>
      </div>
    );
  }
}

export default App;
