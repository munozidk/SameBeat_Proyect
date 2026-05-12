import "./AuthForm.css";
import mascota from "../../assets/mascota.svg";
import { useNavigate } from "react-router-dom";
  
function AuthForm() {
  const navigate = useNavigate();

  return (
    <div className="right">

      {/* Mascota */}
      <img
        src={mascota}
        alt="Mascota"
        className="mascota"
      />

      <h1>Sign Up</h1>

      <p className="sub">
        Sign Up with Open account
      </p>

      {/* BOTONES */}
      <div className="social">

        <button>
          <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" />
          Google
        </button>

        <button>
          <img src="https://cdn-icons-png.flaticon.com/512/0/747.png" />
          Apple
        </button>

      </div>

      <p className="divider">
        Or continue with phone number
      </p>

      {/* INPUT */}
      <div className="input-box">
        <img
          src="https://cdn-icons-png.flaticon.com/512/597/597177.png"
          className="icon"
        />

        <input
          type="text"
          placeholder="Phone number"
        />
      </div>

      {/* INPUT */}
      <div className="input-box">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3064/3064155.png"
          className="icon"
        />

        <input
          type="password"
          placeholder="Password"
        />
      </div>

      {/* BOTÓN */}
       <button
        className="signup"
        onClick={() => navigate("/genres")}
       >
        Sign Up
        </button>

      <p className="login">
      Don’t have an account?{" "}
  
      <span onClick={() => navigate("/signup")}>
       Sign Up
      </span>
      </p>
    </div>);
}

export default AuthForm;