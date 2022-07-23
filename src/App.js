import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/about';

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar/>
          <About/>
      </Router>    
    </div>
  );
}

export default App;
