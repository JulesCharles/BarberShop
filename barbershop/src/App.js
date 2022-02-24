import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Carrousel from './components/Carrousel'
import Localisation from './components/Localisation';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carrousel />
      <Localisation />

    </div>
  );
}

export default App;
