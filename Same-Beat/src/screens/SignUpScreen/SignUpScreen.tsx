import "./SignupScreen.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import loginImg from "../../assets/Log in.svg";
import mascota from "../../assets/mascota.svg";

function SignupScreen() {

  const [accepted, setAccepted] = useState(false);
  const navigate = useNavigate();

  return (
    <>

      {/* SVG FILTER */}
      <svg xmlns="http://www.w3.org/2000/svg">

        <filter id="goo">

          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="45"
            result="blur"
          />

          <feColorMatrix
            in="blur"
            mode="matrix"
            values="
              1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 0 0 35 -15"
            result="goo"
          />

        </filter>

      </svg>

      {/* BACKGROUND */}
      <div className="gooey-container">

        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
        <div className="blob blob4"></div>
        <div className="blob blob5"></div>

      </div>

      <main className="register-container">

        {/* LEFT */}
        <section className="left-panel">

          <img
            src={loginImg}
            alt="Same Beat"
            className="left-art"
          />

        </section>

        {/* RIGHT */}
        <section className="right-panel">

          <img
            src={mascota}
            alt="Mascota"
            className="mini-mascot"
          />

          <h1>Sign Up</h1>

          <p className="subtitle">
            Get started!!
          </p>

          <form
            className="register-form"
            onSubmit={(e) => {
                e.preventDefault();

                if (accepted) {
                navigate("/genres");
                }
            }}
          >

            {/* USER */}
            <div className="input-group">

              <i className="fa-regular fa-id-badge"></i>

              <input
                type="text"
                placeholder="User name"
              />

            </div>

            {/* EMAIL */}
            <div className="input-group">

              <i className="fa-regular fa-envelope"></i>

              <input
                type="email"
                placeholder="Email"
              />

            </div>

            {/* PASSWORD */}
            <div className="input-group">

              <i className="fa-solid fa-lock"></i>

              <input
                type="password"
                placeholder="Password"
              />

            </div>

            {/* CHECK */}
            <label className="checkbox-group">

              <input
                type="checkbox"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
              />

              <span>
                I accept terms and conditions
              </span>

            </label>

            {/* BUTTON */}
            <button
              type="submit"
              className="create-btn"
              disabled={!accepted}
            >
              {accepted ? "Create Account" : "Create Account"}
            </button>

            {/* LOGIN */}
            <p className="login-link">

              Already have an account?

              <Link to="/login">
                Sign in
              </Link>

            </p>

          </form>

        </section>

      </main>

    </>
  );
}

export default SignupScreen;