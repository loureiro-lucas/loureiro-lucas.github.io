import Navbar from './components/Navbar';
import Home from './pages/Home.js';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' render={ () => <Home /> } />
      </Switch>
    </div>
  );
}

export default App;
