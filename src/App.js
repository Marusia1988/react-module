import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';


import Home from './Pages/Home';
import About from './Pages/About';
import Contacts from './Pages/Contacts';
import Blog from './Pages/Blog';
import Posts from './Pages/Posts';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";




function App() {
  return (
    <div>
     <Header />
     <BrowserRouter>
     <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/contacts" element={<Contacts/>} />
          <Route exact path="/blog" element={<Blog/>} />
          <Route exact path="/posts" element={<Posts/>} />
    </Routes>
    </BrowserRouter>
       
   </div>
  );
}

export default App;
