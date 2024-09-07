import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';


import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Footer from './components/Footer';


function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
