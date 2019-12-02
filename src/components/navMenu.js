import React, { Component } from 'react';

import './componentsStyles/navMenu.css'

class NavMenu extends Component {
  constructor(){
    super();
    this.state={
      movies:[],
    }
  }



  render() {
    return (
      <div className="navMenuContainer">
        <div className="logoContainer">
          <img src="https://www.accedo.tv/wp-content/uploads/2017/08/logo.png"/>
          <h1>VOD Aplication</h1>
        </div>

        <div className="buttonsContainer">
          <a href="/">
            <button> HOME </button>
          </a>

          <a href="/history">
            <button> HISTORY</button>
          </a>
        </div>
      </div>
    );
  }
}

export default NavMenu;
