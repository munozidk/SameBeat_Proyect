import { BrowserRouter, Routes, Route } from "react-router-dom";

import OnboardingScreen from "./screens/OnboardingScreen/OnboardingScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import GenresScreen from "./screens/GenresScreen/ConcertGenres";
import SignUpScreen from "./screens/SignUpScreen/SignUpScreen";
import ChatInteractivo from "./components/chatInteractivo/ChatInteractivo";

import Sidebar from "./components/Sidebar/Sidebar";

import "./index.css";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<OnboardingScreen />}
        />

        <Route
          path="/login"
          element={<LoginScreen />}
        />

        <Route
          path="/genres"
          element={<GenresScreen />}
        />

        <Route
          path="/signup"
          element={<SignUpScreen />}
        />

        <Route
          path="/sidebar"
          element={<Sidebar />}
        />

        <Route
          path="/chat-test"
          element={<ChatInteractivo />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;