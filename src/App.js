import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error'
import Navbar from './components/Navbar'
import { Switch, Route } from 'react-router-dom';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App = () => {
      return (
      <>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/contact" component={Contact}/>
          <Route component={Error} />          
        </Switch>
        <Footer />
        
        
      </>

    );
  };


export default App;
