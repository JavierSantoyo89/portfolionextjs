'use client'
import React from "react";

function page() {

  const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

// signUpButton.addEventListener('click', () => {
//     console.log("entro en el sign up");
//   container.classList.add('right-panel-active');
// });

// signInButton.addEventListener('click', () => {
//     console.log('entro en el sign in');
//   container.classList.remove('right-panel-active');
// });

  return (
    <body>
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create your account</h1>
            <span>Insert you email for registration</span>
            <input type="text" placeholder="Name"></input>
            <input type="email" placeholder="Email"></input>
            <input type="password" placeholder="Password"></input>
            <br />
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Log in</h1>
            <span>Login to your account</span>
            <input type="email" placeholder="Email"></input>
            <input type="password" placeholder="Password"></input>
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Have already Account?</h1>
              <p>
                To keep connect with us please login with your account here!
              </p>
              <button className="ghost" id="signIn">
                Sign in
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Create your account</h1>
              <p>Enter your personal detail and start journey with us</p>
              <button className="ghost" id="signUp">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default page;
