import './App.css';
import React,{Fragment} from 'react';
import { BrowserRouter as Router,  Route} from 'react-router-dom';
import Routes from './components/Routes';
import Nav from './components/Nav';

function App() {
  return (
    <Fragment>
      <div className="App">
      <Router>
        <Nav/>
        <Routes/>
      </Router>
    </div>   
    </Fragment>
  );
}

export default App;
