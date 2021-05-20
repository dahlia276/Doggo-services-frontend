import React from "react"
import {NavLink} from "react-router-dom"
import { login } from "../api"

class Login extends React.Component {
    state = {
        username: "",
        password: "",
    }

    handleChange = (event) => {
        let { name, value } = event.target;
        this.setState({ [name]: value });
      };

      handleFormSubmit = async (event) => {
          event.preventDefault()
          const {username, password} = this.state
          const response = await login(username, password)
    //      this.props.setCurrentUser(response.data)
          this.props.history.push("/")
      }

    render () {
        const {username, password} = this.state
        return(
            <>
            <img className="img-l" src="/images/bharathi-kannan-rfL-thiRzDs-unsplash.jpg"/>
            <form onSubmit={this.handleFormSubmit}>
            <div className="division-1">
              <label className="login-t">Username:</label>
              <input className="login-i" type="text" name="username" value={username} onChange={this.handleChange} />

              <label className="login-t-2">Password:</label>
              <input className="login-i-2" type="password" name="password" value={password} onChange={this.handleChange} />

              <button className="login-btn">Login</button>
              </div>
            </form>
            <p className="login-d">
              Don't have an account?
              <NavLink to="/signup"> Signup</NavLink>
            </p>
          </>
        )
    }
}

export default Login
