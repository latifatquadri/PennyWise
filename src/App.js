import Hero from "./Pages/Hero/Hero";
import { Routes, Route, useLocation} from "react-router-dom";
import Login from "./Pages/User/Authentication/Login";
import Register from "./Pages/User/Authentication/Register";
import About from "./Pages/Hero/About";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Pages/Footer/Footer";
import Navbar from "./Pages/Navbar/Navbar";
import User from "./Pages/Dashboard/User";
import Forgetpassword from "./Pages/User/Forgetpassword";
function App() {
  const location = useLocation();

  console.log("Current path:", location.pathname);

  const noNavbarPaths = ["/user"];
  return (
    <div>
      {/* Conditionally render the Navbar */}
      {!noNavbarPaths.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path='/abouts' element={<About/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/forgetpassword' element={<Forgetpassword />} />
        <Route path="/user" element= {<User />} />
      </Routes>
      <Footer />
    </div>
   

  );
}

export default App;
