import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import React from 'react';
import Services from './components/Services';
import {loggedin} from "./api"
import OwnerProfile from './components/Owner-profile';


class App extends React.Component {
  state = {
    loggedInUser: null,
  }

  async componentDidMount(){
    if (this.state.loggedInUser === null) {
      const response = await loggedin()
      if (response.data._id) {
        this.setCurrentUser(response.data)
      } 
    }
  }

  setCurrentUser = (user) => {
    this.setState({
      loggedInUser: user,
    });
  };

  
  render () {
    const { loggedInUser } = this.state;
    return (
  <div className="App">

  <Switch>
  <Route
        exact
        path="/login"
        render={(props) => {
          return <Login {...props} setCurrentUser={this.setCurrentUser} />;
        }}
      />
      <Route exact path={"/signup"} component={Signup} />
      <Route exact path={"/services"} component={Services} />
      <Route exact path={"/sitter-request"} component={OwnerProfile}/>

    </Switch>
  </div>
    )
  }
  
}

export default App;
