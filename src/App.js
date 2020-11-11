import React, { Component } from 'react';
import './App.css';
import Welcome from './components/welcome/Welcome';
import Clock from './components/clock/Clock';
import Contact from './components/contact/Contact';
import Name from './components/name/Name';
import Navigation from './components/navigation/Navigation'
import {Route, Switch } from 'react-router-dom'
import NotFound from './components/notfound/NotFound';


// class App extends Component {
  // render() {
  function App() {
    return (
<div className="App"> 

<Navigation />
<Switch>
<Route 
exact 
path='/' 
render={(props) => <Welcome {...props} name ="Richie"/>}
/>
<Route path='/clock' component={Clock} />
<Route path='/clock' component={Clock} />

<Route path='/contact' component={Contact} />
<Route path='/welcome/:name' component={Name} />
<Route component={NotFound} />

</Switch>
</div>
);
}    
export default App;
  
//     <div> 
//       <Navigation />
//       <Route
//       exact
//       path='/'
//       render={(props) => <Welcome {...props} name="Richie"/>}
// /> 
