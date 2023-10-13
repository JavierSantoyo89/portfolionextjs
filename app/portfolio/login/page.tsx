"use client";
import { useState } from "react";
import "./login.css";
function page() {
  const signUpButton = document.getElementById("signUp");
  const signInButton = document.getElementById("signIn");
  const container = document.getElementById("login-container");
  function cambioSlide() {
    console.log("jalo");
  }

  // const [singInActive, setSingInActive] = useState(0)

  // signUpButton.addEventListener('click', () => {
  //     console.log("entro en el sign up");
  //   container.classList.add('right-panel-active');
  // });

  // signInButton.addEventListener('click', () => {
  //     console.log('entro en el sign in');
  //   container.classList.remove('right-panel-active');
  // });

  return (
    <main className="main-login">
      <div className="login-container" id="login-container">
        <div className="login-form-container login-sign-up-container">
          <form id="login-form" action="#">
            <h1 className="login-h1">Create your account</h1>
            <span className="login-span">Insert you email for registration</span>
            <input id="login-input" type="text" placeholder="Name"></input>
            <input id="login-input" type="email" placeholder="Email"></input>
            <input
              id="login-input"
              type="password"
              placeholder="Password"
            ></input>
            <br />
          </form>
        </div>
        <div className="login-form-container login-sign-in-container">
          <form id="login-form" action="#">
            <h1 className="login-h1">Log in</h1>
            <span className="login-span">Login to your account</span>
            <input id="login-input" type="email" placeholder="Email"></input>
            <input
              id="login-input"
              type="password"
              placeholder="Password"
            ></input>
            <a id="login-link" href="#">
              Forgot your password?
            </a>
            <button id="login-button" className="login-button">
              Sign In
            </button>
          </form>
        </div>
        <div className="login-overlay-container">
          <div className="login-overlay">
            <div className="login-overlay-panel login-overlay-left">
              <h1 className="login-h1">Have already Account?</h1>
              <p id="login-p">
                To keep connect with us please login with your account here!
              </p>
              <button className="ghost login-button" id="signIn">
                Sign in
              </button>
            </div>
            <div className="login-overlay-panel login-overlay-right">
              <h1 className="login-h1">Create your account</h1>
              <p id="login-p">Enter your personal detail and start journey with us</p>
              <button
                className="ghost login-button"
                id="signUp"
                onClick={cambioSlide}
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default page;
