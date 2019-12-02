import React, { Component } from 'react';
import {Route, HashRouter, BrowserRouter, Switch, Router, Link} from 'react-router-dom'
import axios from 'axios';
import './styles/movieDescription.css'
import NavMenu from './components/navMenu.js'


class MovieDescription extends Component {
  constructor(){
    super();
    this.state={
      movie:[],
    }
    this.watchMovie = this.watchMovie.bind(this);
  }

  componentWillMount(){
    var lastMovie=JSON.parse(localStorage.getItem('lastMovie'))
    console.log(lastMovie)
    this.setState({
      movie:lastMovie
    })
  }

  watchMovie(){
    if(localStorage.getItem('history')){
      //alert("hay algo en el historial")
      var history = JSON.parse(localStorage.getItem('history'))
      history.push(JSON.stringify(this.state.movie))
      localStorage.setItem('history', JSON.stringify(history));

      //console.log(history)
    }else{
      //alert("no hay nada en el historial")
      var history=[]
      history.push(JSON.stringify(this.state.movie))
      localStorage.setItem('history', JSON.stringify(history));

    }
  }


  render() {

    const toMoviePlayer={
      pathname:"/player/"+this.state.movie.title,
      movieUrl:this.state.movie.contents[0].url
    }

    return (
      <div>
      <NavMenu/>
      <div className="movieDescriptionContainer">
        <img src={this.state.movie.images[0].url}/>

        <div className="movieDataContainer">
          <h1>{this.state.movie.title}</h1>

          <p className="parentalRatingLanguageContainer">
            <a>{this.state.movie.parentalRatings[0].rating}</a> |&nbsp;
            {this.state.movie.audios.map((it, key)=>( <a>{it}, &nbsp;</a> ))}
          </p>

          <p className="descriptionContainer">
            {this.state.movie.description}
          </p>

          <p>
            Credits: {this.state.movie.credits.map((it,)=>( <a>{it.name}({it.role}), &nbsp;</a> ))}
          </p>

          <Link to={toMoviePlayer}>
            <button onClick={this.watchMovie.bind(this)} className="watchMovieButton"> Watch Movie </button>
          </Link>
        </div>
      </div>
      </div>
    );
  }
}

export default MovieDescription;
