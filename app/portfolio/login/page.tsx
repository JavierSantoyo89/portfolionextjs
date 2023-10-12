'use client'
import { useState } from "react";
import Link from "next/link";
import './login.css'
function page() {
// const [singInActive, setSingInActive] = useState(0)
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
  
    <main className='main-login'>
      <div className='container-login' id='container-login'>
        <div className='sign-up-container-login form=container-login'>
          <form id='form-login' action="#">
            <h1 className='title-login'>Create your account</h1>
            <span className='spanText'>Insert you email for registration</span>
            <input id='input-login' type="text" placeholder="Name"></input>
            <input id='input-login' type="email" placeholder="Email"></input>
            <input id='input-login' type="password" placeholder="Password"></input>
            <br />
          </form>
        </div>
        <div className="form-container-login sign-in-container-login">
          <form id='form-login' action="#">
            <h1 className='title-login'>Log in</h1>
            <span className='spanText'>Login to your account</span>
            <input id='input-login' type="email" placeholder="Email"></input>
            <input id='input-login' type="password" placeholder="Password"></input>
            <Link className='linkForgot' href={'#'}>Forgot your password?</Link>
            <button className='button-login'>Sign In</button>
          </form>
        </div>
        <div className='overlayContainer-login'>
          <div className="overlay">
            <div>
            {/* <div className={style.overlayPanel} className ={ style.overlayLeft}> */}
              <h1 className='title-login'>Have already Account?</h1>
              <p className='paragraph'>
                To keep connect with us please login with your account here!
              </p>
              <button className='ghost' id="signIn">
                Sign in
              </button>
            </div>
            
            <div className='overlayPanel overlayRight'>
              <h1 className='title-login'>Create your account</h1>
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
