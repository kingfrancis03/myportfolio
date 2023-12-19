// Import the necessary modules from React
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from 'pages/home'
import About from 'pages/about';
import NavBar from 'components/navbar/Navbar';
import Footer from 'components/footer';

// Define a class named App that extends the React Component class
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
          <div>
            <Routes>
              <Route path="/" element={ <Home />} />
              <Route path="/about" element={ <About />} />  
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    );
  }
}

// Export the App class as the default export of this module
export default App;
