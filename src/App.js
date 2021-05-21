import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import React from 'react';
import Services from './components/Services';
import {loggedin} from "./api"
import OwnerProfile from './components/Owner-profile';
import SitterProfile from './components/Sitter-profile';
import BecomeSitter from './components/BecomeSitter';
import Home from './components/Home';
import Navbar from "./components/Navbar"
import AvailableSitters from './components/AvailableSitters';
import {ToastContainers} from "react-toastify"
import "bulma/css/bulma.css";



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
<Navbar loggedInUser={loggedInUser}/>
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
      <Route exact path={"/sitter-profile"} component={SitterProfile}/>
      <Route exact path={"/become/sitter"} component={BecomeSitter}/>
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/available-sitters"} component={AvailableSitters} />


    </Switch>
  </div>
    )
  }
  
}

export default App;
