import "./SignupScreen.css";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import { useState } from "react";

import loginImg from "../../assets/Log in.svg";

function SignupScreen() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    phone: "",
    email: "",
    dateOfBirth: "",
    password: "",
    confirmPassword: "",
  });

  const [accepted, setAccepted] = useState(false);

  const [error, setError] = useState("");

  // Track if user has attempted to interact with the form
  const [attempted, setAttempted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    setAttempted(true);

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const isFormValid =
    formData.firstName.trim() !== "" &&
    formData.lastName.trim() !== "" &&
    formData.username.trim() !== "" &&
    formData.phone.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.dateOfBirth.trim() !== "" &&
    formData.password.trim() !== "" &&
    formData.confirmPassword.trim() !== "" &&
    formData.password === formData.confirmPassword &&
    accepted;

  const handleSubmit = (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    setError("");

    if (!accepted) {

      setError(
        "You must accept the terms and conditions."
      );

      return;

    }

    if (
      formData.password !==
      formData.confirmPassword
    ) {

      setError(
        "Passwords do not match."
      );

      return;

    }

    const users = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    const emailExists = users.some(
      (user: any) =>
        user.email === formData.email
    );

    if (emailExists) {

      setError(
        "This email is already registered."
      );

      return;

    }

    users.push(formData);

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    localStorage.setItem(
      "currentUser",
      JSON.stringify(formData)
    );

    navigate("/genres");

  };

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

          <h1>Sign Up</h1>

          <p className="subtitle">
            Create your account
          </p>

          <form
            className="register-form"
            onSubmit={handleSubmit}
          >

            {/* NAME */}
            <div className="double-input">

              <div className="input-group">

                <i className="fa-regular fa-user"></i>

                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                />

              </div>

              <div className="input-group">

                <i className="fa-regular fa-user"></i>

                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                />

              </div>

            </div>

            {/* USERNAME */}
            <div className="input-group">

              <i className="fa-regular fa-id-badge"></i>

              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
              />

            </div>

            {/* PHONE */}
            <div className="input-group">

              <i className="fa-solid fa-phone"></i>

              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
              />

            </div>

            {/* EMAIL */}
            <div className="input-group">

              <i className="fa-regular fa-envelope"></i>

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />

            </div>

            {/* DATE OF BIRTH */}
            <div className="input-group input-group--date">

              <i className="fa-regular fa-calendar"></i>

              <input
                type="date"
                name="dateOfBirth"
                placeholder="Date of birth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                max={new Date().toISOString().split("T")[0]}
              />

            </div>

            {/* PASSWORD */}
            <div className="input-group">

              <i className="fa-solid fa-lock"></i>

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />

            </div>

            {/* CONFIRM PASSWORD */}
            <div className="input-group">

              <i className="fa-solid fa-lock"></i>

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />

            </div>

            {/* CHECKBOX */}
            <label className="checkbox-group">

              <input
                type="checkbox"
                checked={accepted}
                onChange={(e) => {
                  setAttempted(true);
                  setAccepted(e.target.checked);
                }}
              />

              <span>
                I accept the{" "}
                <a href="#" className="link-terms">
                  Terms of Service
                </a>
                {" "}and{" "}
                <a href="#" className="link-privacy">
                  Privacy Policy
                </a>
              </span>

            </label>

            {/* ERROR */}
            {error && (
              <p className="error-message">
                {error}
              </p>
            )}

            {/* BUTTON */}
            <button
              type="submit"
              className={`create-btn${attempted && !isFormValid ? " create-btn--error" : ""}`}
              disabled={!isFormValid}
            >

              Create

            </button>

            {/* LOGIN */}
            <p className="login-link">

              Already have an account?{" "}

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