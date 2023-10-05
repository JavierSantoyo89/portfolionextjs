'use client'
import React from "react";
import Link from "next/link";
import './login.css'
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
    <main className='generals'>
      <div className='containers' id='containers'>
        <div className='signUpContainers formContainers'>
          <form className='form' action="#">
            <h1 className='title'>Create your account</h1>
            <span className='spanText'>Insert you email for registration</span>
            <input className='input' type="text" placeholder="Name"></input>
            <input className='input' type="email" placeholder="Email"></input>
            <input className='input' type="password" placeholder="Password"></input>
            <br />
          </form>
        </div>
        <div className="formContainers sign-in-containers">
          <form className='form' action="#">
            <h1 className='title'>Log in</h1>
            <span className='spanText'>Login to your account</span>
            <input className='input' type="email" placeholder="Email"></input>
            <input className='input' type="password" placeholder="Password"></input>
            <Link className='linkForgot' href={'#'}>Forgot your password?</Link>
            <button className='button'>Sign In</button>
          </form>
        </div>
        <div className='overlayContainers'>
          <div className="overlay">
            <div>
            {/* <div className={style.overlayPanel} className ={ style.overlayLeft}> */}
              <h1 className='title'>Have already Account?</h1>
              <p className='paragraph'>
                To keep connect with us please login with your account here!
              </p>
              <button className='ghost' id="signIn">
                Sign in
              </button>
            </div>
            
            <div className='overlayPanel overlayRight'>
              <h1 className='title'>Create your account</h1>
              <p className='paragraph'>Enter your personal detail and start journey with us</p>
              <button className='ghost' id="signUp">
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
