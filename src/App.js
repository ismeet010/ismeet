import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import ScrollUp from './components/scrollup/Scrollup';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />  
        <Contact />   
      </main>
      <Footer />
      <ScrollUp />
    </div>
  );
}

export default App;
