import React from "react";
import { NavLink } from "react-router-dom";
import {logout} from "../api"

function Navbar({loggedInUser, setCurrentUser}) {

    const logoutUser = async () => {
        await logout()
        setCurrentUser(null)
    }

    return loggedInUser ? (
      <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <a class="navbar-item" href="/home">
          <p className="paws">PAWS</p>
        </a>
        <div
          class="navbar-burger"
          data-target="navbarExampleTransparentExample"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="/sitter-request">
            Search sitters
          </a>
          <a class="navbar-item" href="/become/sitter">
           Become a sitter
          </a>
          <a class="navbar-item" href="/services">
            Our services
          </a>
          <a class="navbar-item" href="/available-sitters">
           Available sitters
          </a>
          </div>
        </div>
    </nav>
    ) : (
      <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
        <p className="paws">PAWS</p>
        </a>
        <div
          class="navbar-burger"
          data-target="navbarExampleTransparentExample"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="/sitter-request">
            Search sitters
          </a>
          <a class="navbar-item" href="/become/sitter">
           Become a sitter
          </a>
          <a class="navbar-item" href="/services">
            Our services
          </a>
          <a class="navbar-item" href="/available-sitters">
           Available sitters
          </a>
          </div>
        </div>
        <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary" href="/signup">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light" href="/login">
            Log in
          </a>
        </div>
      </div>
    </div>
    </nav> 
    )
}
export default Navbar;