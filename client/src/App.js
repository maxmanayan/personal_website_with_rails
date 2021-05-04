
import { Route, Switch } from 'react-router';
import './App.css';
import NavBar from './components/NavBar';
import About from './pages/About';
import Connect from './pages/Connect';
import Home from './pages/Home';
import MyProjects from './pages/MyProjects';

function App() {
  return (
    <>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/connect" component={Connect} />
      <Route exact path="/projects" component={MyProjects} />
    </Switch>
    </>
  );
}

export default App;
