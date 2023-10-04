'use client'
import React from "react";
import Link from "next/link";
import style from'./login.module.css'
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
    <main className={style.generals}>
      <div className={style.containers} id={style.containers}>
        <div>
        {/* <div className={style={signUpContainers:String, formContainers:String }}> */}
          <form className={style.form} action="#">
            <h1 className={style.title}>Create your account</h1>
            <span className={style.spanText}>Insert you email for registration</span>
            <input className={style.input} type="text" placeholder="Name"></input>
            <input className={style.input} type="email" placeholder="Email"></input>
            <input className={style.input} type="password" placeholder="Password"></input>
            <br />
          </form>
        </div>
        <div className="formContainers sign-in-containers">
          <form className={style.form} action="#">
            <h1 className={style.title}>Log in</h1>
            <span className={style.spanText}>Login to your account</span>
            <input className={style.input} type="email" placeholder="Email"></input>
            <input className={style.input} type="password" placeholder="Password"></input>
            <Link className={style.linkForgot} href={'#'}>Forgot your password?</Link>
            <button className={style.button}>Sign In</button>
          </form>
        </div>
        <div className={style.overlayContainers}>
          <div className="overlay">
            <div>
            {/* <div className={style.overlayPanel} className ={ style.overlayLeft}> */}
              <h1 className={style.title}>Have already Account?</h1>
              <p className={style.paragraph}>
                To keep connect with us please login with your account here!
              </p>
              <button className={style.ghost} id="signIn">
                Sign in
              </button>
            </div>
            <div>
            {/* <div className={style.overlayPanel} className ={style.overlayRight}> */}
              <h1 className={style.title}>Create your account</h1>
              <p className={style.paragraph}>Enter your personal detail and start journey with us</p>
              <button className={style.ghost} id="signUp">
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
