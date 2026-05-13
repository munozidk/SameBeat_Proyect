import { BrowserRouter, Routes, Route } from "react-router-dom";

import OnboardingScreen from "./screens/OnboardingScreen/OnboardingScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import GenresScreen from "./screens/GenresScreen/ConcertGenres";
import SignUpScreen from "./screens/SignUpScreen/SignUpScreen";
import ChatInteractivo from "./components/chatInteractivo/ChatInteractivo";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import DiscoverScreen from "./screens/DiscoverScreen/DiscoverScreen";

import Sidebar from "./components/Sidebar/SideBar";



import "./index.css";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      {children}
    </div>
  );
}

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
            <AppLayout>
              <HomeScreen />
            </AppLayout>
          }
        />

        <Route                    
           path="/discover"
          element={
        <AppLayout>
          <DiscoverScreen />
        </AppLayout>
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