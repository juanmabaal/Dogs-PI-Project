import './App.css'
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import AboutMe from './components/AboutMe/AboutMe';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route path='/home' component={Home}/>
          <Route path='/detail/:idBreed' component={Detail}/>
          <Route path='/form' component={Form}/>
          <Route path='/about' component={AboutMe}/>
        </Switch>
      </Router>


    </div>
  );
}

export default App
