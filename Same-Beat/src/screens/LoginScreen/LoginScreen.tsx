import "./LoginScreen.css";
import AuthForm from "../../components/AuthForm/AuthForm";
import loginImg from "../../assets/Log in.svg";

function LoginScreen() {
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

      {/* CONTENIDO */}
      <div className="container">

        {/* IZQUIERDA */}
        <div className="left">

          <img
            src={loginImg}
            alt="Ilustración"
            className="illustration"
          />

        </div>

        {/* DERECHA */}
        <AuthForm />

      </div>

    </>
  );
}

export default LoginScreen;