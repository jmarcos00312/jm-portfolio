import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Project from './Pages/Project';
import Resume from './Pages/Resume';
import Contact from './Pages/Contact'
import Blog from './Pages/Blog';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          {/* <div className="Header-Navbar"> */}
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/project" component={Project} />
            <Route path="/resume" component={Resume} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </header>
        {/* </div> */}
        <div className="App-body">
          <h1>
            body
          </h1>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
