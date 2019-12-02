import React, { Component } from 'react';
import axios from 'axios';
import CarouselCard from './components/carouselCard.js'
import NavMenu from './components/navMenu.js'

import './styles/homePage.css'

class Home extends Component {
  constructor(){
    super();
    this.state={
      movies:[],

    }
  }

  componentWillMount(){
    const url = 'https://demo5520281.mockable.io/movies'
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ movies:data.entries})
      console.log(this.state.movies)
    })
  }


  render() {
    return (
      <div className="homePageContainer">
      <NavMenu/>

      <div id="customScrollBar" className="carouselContainer">
        {this.state.movies.map((it, key)=>(
          <CarouselCard keyIdenty={key} movieData={it} title={it.title} audios={it.audios} duration={it.duration} cover={it.images[0].url}/>
        ))}
      </div>


      </div>
    );
  }
}

export default Home;
