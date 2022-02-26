
import './App.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import DarkMode from './components/DarkMode';
import { useState } from 'react';


function App() {

  const [ mode, setMode ] = useState('')
  const [ lastUpdate, setLastUpdate ] = useState('')

  return (
    <div className={mode}>
        <Header />
        <DarkMode mode={mode} setMode={setMode} lastUpdate={lastUpdate} />
        <Dashboard setLastUpdate={setLastUpdate} />
        <Footer />
    </div>
  );
}

export default App;
