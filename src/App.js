import React, { Component } from 'react'; 
import { Router, browserHistory, Route, Link } from 'react-router'; 
import logo from './logo.svg'; 
import './App.css'; 

const Page = ({ title }) => ( 
        
        <div className="App"> 
          <div className="App-header"> 
            <img src={logo} className="App-logo" alt="logo" /> 
            <h2>{title}</h2> 
          </div> 
          <p className="App-intro"> Bu {title} sayfasıdır. </p> 
          <p> <Link to="/">Anasayfa</Link> </p> 
          <p> <Link to="/hakkinda">Hakkında</Link> </p> 
          <p> <Link to="/ayarlar">Ayarlar</Link> </p> </div> 
); 

const Anasayfa = (props) => ( 
        <Page title="Anasayfa"/> 
);
 
const Hakkinda = (props) => ( 
        <Page title="Hakkinda"/> 
); 

const Ayarlar = (props) => ( 
        <Page title="Ayarlar"/> 
); 

class App extends Component { 
         render() { 
             return ( <Router history={browserHistory}> 
                      <Route path="/" component={Anasayfa}/> 
                      <Route path="/hakkinda" component={Hakkinda}/> 
                      <Route path="/ayarlar" component={Ayarlar}/> 
                      </Router> 
                    );
         } 
} 

export default App;