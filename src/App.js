import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Hero';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="sections">
        <Home />
        <About />
        <Resume />
        <Contact />
      </div>
    </div>
  );
}

export default App;
