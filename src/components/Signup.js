import React from "react"
import {NavLink} from "react-router-dom"
import { signup } from "../api"

class Signup extends React.Component {
    state = {
        username: "",
        email: "",
        password: "",
    }

    handleChange = (event) => {
        let { name, value } = event.target;
        this.setState({ [name]: value });
      };

      handleFormSubmit = async (event) => {
          event.preventDefault()
          const {username, password, email} = this.state
          await signup(username, email, password)
          this.props.history.push("/")
      }

    render () {
        const {username, password, email} = this.state
        return(
            <>
            <img className="img-l" src="/images/bharathi-kannan-rfL-thiRzDs-unsplash.jpg"/>
            <form onSubmit={this.handleFormSubmit}>
            <div className="division-1">
              <label className="login-t">Username:</label>
              <input className="login-i" type="text" name="username" value={username} onChange={this.handleChange} />

              <label className="login-t-2-">Email:</label>
              <input className="login-i-2" type="email" name="email" value={email} onChange={this.handleChange} />

              <label className="login-t-3">Password:</label>
              <input className="login-i-3" type="password" name="password" value={password} onChange={this.handleChange} />

              <button className="signup-btn">Signup</button>
              </div>
            </form>
            <p className="signup-d">
              Already have an account?
              <NavLink to="/login"> Login</NavLink>
            </p>
          </>
        )
    }
}

export default Signup