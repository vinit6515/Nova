// App.js
import React from 'react';
import './App.css'; // You can create this CSS file for styling
import Header from './Header';
import Home from './Home';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';


function App() {
  return (
    <div className="App">
      <Header />
      
        <Home />
        <AboutUs></AboutUs>
        <ContactUs />
        <footer>
        <p>&copy; 2023 DJS NOVA</p>
    </footer>
      
    </div>
  );
}


export default App;
