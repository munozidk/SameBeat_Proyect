import { BrowserRouter, Routes, Route } from "react-router-dom";

import OnboardingScreen from "./screens/OnboardingScreen/OnboardingScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import GenresScreen from "./screens/GenresScreen/ConcertGenres";
import SignUpScreen from "./screens/SignUpScreen/SignUpScreen";
import ChatInteractivo from "./components/chatInteractivo/ChatInteractivo";
import HomeScreen from "./screens/HomeScreen/HomeScreen";



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
          path="/home"
          element={
            
                <HomeScreen />
        
          }
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