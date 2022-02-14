/* eslint-disable no-lone-blocks */
import './App.css';
import Home from './components/Desktop/home';
import Experience from './components/Desktop/experience';
import Socials from './components/Desktop/Socials';
import MobileHome from './components/Mobile/MobileHome';
import MobileExperience from './components/Mobile/MobileExperience';
import MobileSocials from './components/Mobile/MobileSocials';
import NoneHome from './components/None/NoneHome';
import NoneExperience from './components/None/NoneExperience';
import NoneSocials from './components/None/NoneSocials';
import useWindowDimensions from './useWindowDimensions';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const {height,width} = useWindowDimensions();
  const isDesktop = width/height > 1.67 ;
  const isMobile = width/height < 0.88 ;
  return (
    <div className="App">
    {isDesktop && (
      <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/about" exact element={<Experience/>}/>
      <Route path="/Socials" exact element={<Socials/>}/>
    </Routes>
    )}
    {isMobile && (
      <Routes>
        <Route path="/" exact element={<MobileHome/>}/>
        <Route path="/about" exact element={<MobileExperience/>}/>
        <Route path="/Socials" exact element={<MobileSocials/>}/>
      </Routes>
    )}
    {!isDesktop && !isMobile && (
      <Routes>
        <Route path="/" exact element={<NoneHome/>}/>
        <Route path="/about" exact element={<NoneExperience/>}/>
        <Route path="/Socials" exact element={<NoneSocials/>}/>
      </Routes>
    )}
    </div>
  );
}

export default App;