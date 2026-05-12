import { BrowserRouter, Routes, Route } from "react-router-dom";
import OnboardingScreen from "./screens/OnboardingScreen/OnboardingScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import GenresScreen from "./screens/GenresScreen/ConcertGenres";
import SignUpScreen from "./screens/SignUpScreen/SignUpScreen";
<<<<<<< HEAD
import Sidebar from "./components/Sidebar/Sidebar";
=======
import ChatInteractivo from "./components/chatInteractivo/ChatInteractivo";
import HomeScreen from "./screens/HomeScreen/HomeScreen";


>>>>>>> a9dce32795c0062c9a3d92be683ac889e973209b


/* import ConcertsScreen from './screens/Concerts/Concerts';
import ConcertDetails from './screens/ConcertDetails/ConcertDetails';
import ConcertDescription from './screens/ConcertDescription/ConcertDescription';
import Communities from './screens/Communities/Communities';
import ProfileScreen from './screens/Profile/ProfileScreen';
import MainLayout from './components/MainLayout/MainLayout';
import { FilterProvider } from './contexts/FilterContext'; */

import "./index.css";



function App() {
  return (
   // <FilterProvider>
      <BrowserRouter>

 <Routes>
          <Route path="/" element={<OnboardingScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/genres" element={<GenresScreen />} />
          <Route path="/signup" element={<SignUpScreen />} />
          <Route path="/sidebar" element={<Sidebar />} />
        </Routes> 


        {/* <MainLayout>
          <Routes>
            <Route path="/" element={<ConcertsScreen />} />
            <Route path="/concert/:id" element={<ConcertDetails />} />
            <Route path="/concert/:id/description" element={<ConcertDescription />} />
            <Route path="/concert/:id/communities" element={<Communities />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Routes>
        </MainLayout> */}

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


      </BrowserRouter>
    //</FilterProvider>
  );
}

export default App;