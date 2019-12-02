import React, { Component } from 'react';
import {Route, HashRouter, BrowserRouter, Switch, Router, Link} from 'react-router-dom'

import './componentsStyles/carouselCard.css'

class CarouselCard extends Component {
  constructor(props){
    super();
    this.state={

    }
    this.clickCard = this.clickCard.bind(this);

  }

  componentWillMount(){

  }


  clickCard(e){

    var lastMovie = JSON.stringify(this.props.movieData)

    localStorage.setItem('lastMovie', lastMovie);
  }

  render() {

    const toMovieDescription={
      pathname:"/movieDescription/"+this.props.keyIdenty,
      movieData:this.props.movieData,
    }
    return (
      <div onClick={this.clickCard.bind(this)} className="cardContainer">
        <Link to={toMovieDescription}>
          <img src={this.props.cover}/>
          <div>
            <h1 className="prueba">{this.props.title}</h1>
            <p>Audio: {this.props.audios[0]}, {this.props.audios[1]}, {this.props.audios[2]}</p>
            
          </div>
        </Link>
      </div>
    );
  }
}

export default CarouselCard;
