import React, { Component } from 'react';
import axios from 'axios';
import CarouselCard from './components/carouselCard.js'
import NavMenu from './components/navMenu.js'

import './styles/history.css'
const arreglo = []

class History extends Component {


  constructor(){
    super();
    this.state={
      historyState:[]
    }
  }

  componentWillMount(){
    /*var cache=JSON.parse(localStorage.getItem('history'))
    var historyLocal=[]

    for(var i=0; i<cache.length; i++){

      var obj = JSON.parse(cache[i])

      arreglo.push(obj)
    }

    console.log(arreglo)*/
  }


  render() {

    if(localStorage.getItem('history')!=null){
      var cache=JSON.parse(localStorage.getItem('history'))
      var arreglo = []

      for(var i=0; i<cache.length; i++){
        var obj = JSON.parse(cache[i])
        arreglo.push(obj)
      }

      return (
        <div>
        <NavMenu/>

        <h1 className="historyTitle">History</h1>


        {<div id="customScrollBar" className="carouselContainer">
          {arreglo.map((it, key)=>(
            <CarouselCard keyIdenty={key} movieData={it} title={it.title} audios={it.audios} duration={it.duration} cover={it.images[0].url}/>
          ))}
        </div>}


        </div>
      );
    }else if(localStorage.getItem('history')==null){
      return (
        <div>
        <NavMenu/>

        <h1>You have not watched any movie yet</h1>


        </div>
      );
    }


  }
}

export default History;
