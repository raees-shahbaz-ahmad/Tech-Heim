import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Page/Navbar';
import Home from './Components/Navbar/Page/Home';
import Blog from './Components/Navbar/Page/Blog';
import Faq from './Components/Navbar/Page/Faq';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        {/* <Route path="/product" element={<Product />} /> */}
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Faq" element={<Faq />} />
        {/* <Route path="/search" element={<Search />} /> */}
      </Routes>
    </Router>
  );
}

export default App;