import React, { Component } from 'react';
import axios from 'axios';
import './styles/player.css'

class Player extends Component {
  constructor(){
    super();
    this.state={
      movies:[],

    }
  }



  render() {
    const myCallback = () => (
    
      this.props.history.goBack()
    );
    return (
      <div className="playerContainer">
        <h1 className="movieTitle">{this.props.match.params.movieId}</h1>
        <video onEnded={() => myCallback()} controls autoplay="true" muted className="moviePlayer">
          <source src={this.props.location.movieUrl} type="video/mp4"/>
        </video>
      </div>
    );
  }
}

export default Player;
