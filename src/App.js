import React, { Component,Fragment } from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Shows from './components/shows';
import About from './components/About';


export default class extends Component {
    state={
      shows:[]
    }
  
  async componentDidMount(){
    let url='http://api.tvmaze.com/search/shows?q=batman';
    const shows=await(await fetch(url)).json();
    this.setState({shows});
  }
  
  render() {
    const {shows}=this.state;
    return(
<BrowserRouter>
<Fragment>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">Batman</a>
  
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
    <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
    </li>
    <li className="nav-item">
        <Link className="nav-link" to="/shows">Shows</Link>
    </li>
    <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
    </li>
    </ul>
  </div>
</nav>
<div className="container-fluid">
<Route path="/" render={()=><div>Home Page</div>} exact/>
<Route path="/shows" render={props=><Shows {...props} shows={shows}/>}/>
<Route path="/about" render={()=><div>About Page</div>}  />
</div>
</Fragment>

</BrowserRouter>
    );
   
  }
}


