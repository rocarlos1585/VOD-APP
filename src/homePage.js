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
      directores:[
        {nombre: 'Mtra. Sonia Guillermina Aguilar Morales', image:"http://tecmm.edu.mx/imagesReact/images/directores/Sonia-Aguilar.jpg", cargo: 'Directora de Administración y Finanzas', telefono:"38-84-94-70", correo:'sonia.aguilar@tecmm.edu.mx', mailTo:'mailto:sonia.aguilar@tecmm.edu.mx'},
        {nombre: 'Mtra. Hellen García Retamoza', image:"http://tecmm.edu.mx/imagesReact/images/directores/Helen-Garcia.jpg", cargo: 'Directora de Planeación y Desarrollo', telefono:"38-84-94-70", correo:'hellen.garcia@tecmm.edu.mx', mailTo:'mailto:hellen.garcia@tecmm.edu.mx'},
        {nombre: 'Ing. Fernando Leach Pacheco', image:"http://tecmm.edu.mx/imagesReact/images/directores/Fernando-Leach.jpg", cargo: 'Director de Extensión y Vinculación', telefono:"38-84-94-70", correo:'fernando.leach@tecmm.edu.mx', mailTo:'mailto:fernando.leach@tecmm.edu.mx'},
        {nombre: 'Ing. Gualberto Castro Moreno', image:"http://tecmm.edu.mx/imagesReact/images/directores/Gualberto-Moreno-Castro.jpg", cargo: 'Director de Area Academica, Investigación e Innovación', telefono:"38-84-94-70", correo:'gualberto.castro@tecmm.edu.mx', mailTo:'mailto:gualberto.castro@tecmm.edu.mx'},
        {nombre: 'Lic. Jorge Capilla Pacheco', image:"http://tecmm.edu.mx/imagesReact/images/directores/Jorge-Capilla.jpg", cargo: 'Comisario Público', telefono:"38-84-94-70", correo:'jorge.capilla@tecmm.edu.mx', mailTo:'mailto:jorge.capilla@tecmm.edu.mx'},
        {nombre: 'Lic. Juan Pablo Cerrillo Hernández', image:"http://tecmm.edu.mx/imagesReact/images/directores/Juan-Pablo-Cerrillo-Hernandez.jpg", cargo: 'Unidad Académica Arandas', telefono:"01-348-78-32010", correo:'juan.cerrillo@tecmm.edu.mx', mailTo:'mailto:juan.cerrillo@tecmm.edu.mx'},
        {nombre: 'Mtro. Luis Eduardo Jiménez Herrera', image:"http://tecmm.edu.mx/imagesReact/images/directores/Luis-Eduardo-Jimenez-Herrera.jpg", cargo: 'Unidad Académica Chapala', telefono:"01-376-76-5-80-30", correo:'luis.jimenez@tecmm.edu.mx', mailTo:'mailto:luis.jimenez@tecmm.edu.mx'},
        {nombre: 'Ing. Sergio Arturo Martínez Méndez', image:"http://tecmm.edu.mx/imagesReact/images/directores/Sergio-Arturo-Martinez-Mendez.jpg", cargo: 'Unidad Académica Cocula', telefono:"377-773-0030", correo:'sergio.martinez@tecmm.edu.mx', mailTo:'mailto:sergio.martinez@tecmm.edu.mx'},
        {nombre: 'Mtro. Roberto Durán Michel', image:"http://tecmm.edu.mx/imagesReact/images/directores/Roberto-Duran-Michel.jpg", cargo: 'Unidad Académica El Grullo', telefono:"321-38-73435", correo:'roberto.duran@tecmm.edu.mx', mailTo:'mailto:roberto.duran@tecmm.edu.mx'},
        {nombre: 'Dirección Unidad Academica', image:"http://tecmm.edu.mx/imagesReact/images/directores/no-foto.jpg", cargo: 'Unidad Académica La Huerta', telefono:"357-38-41884", correo:'', mailTo:''},
        {nombre: 'Dra. Ma. Eugenia Amador Murguía', image:"http://tecmm.edu.mx/imagesReact/images/directores/Maria-Eugenia-Amador-Murguia.jpg", cargo: 'Unidad Académica Lagos de Moreno', telefono:"01-(474)-403-39-74", correo:'maria.amador@tecmm.edu.mx', mailTo:'mailto:maria.amador@tecmm.edu.mx'},
        {nombre: 'Mtro. Emmanuel Pablo Saldaña Castillón', image:"http://tecmm.edu.mx/imagesReact/images/directores/Emmanuel-Pablo-Saldana-Castillon.jpg", cargo: 'Unidad Académica Mascota', telefono:"01-388-38-60518", correo:'emmanuel.saldana@tecmm.edu.mx', mailTo:'mailto:emmanuel.saldana@tecmm.edu.mx'},
        {nombre: 'Dr. Ernesto Rosales Castañeda', image:"http://tecmm.edu.mx/imagesReact/images/directores/Ernesto-Rosales-Castaneda.jpg", cargo: 'Unidad Académica Tequila', telefono:"37-47-42-72-88", correo:'ernesto.rosales@tecmm.edu.mx', mailTo:'mailto:ernesto.rosales@tecmm.edu.mx'},
        {nombre: 'Mtra. Gloria Luz Rodríguez Gil', image:"http://tecmm.edu.mx/imagesReact/images/directores/Gloria-Luz-Rodriguez-Gil.jpg", cargo: 'Unidad Académica Tala', telefono:"384-73-33000", correo:'gloria.rodriguez@tecmm.edu.mx', mailTo:'mailto:gloria.rodriguez@tecmm.edu.mx'},
        {nombre: 'M.C. Felipe Alfonso Ordoñez García', image:"http://tecmm.edu.mx/imagesReact/images/directores/Felipe-Alfonso-Ordonez-Garcia.jpg", cargo: 'Unidad Académica Tamazula', telefono:"358-10-30060", correo:'alfonso.ordonez@tecmm.edu.mx', mailTo:'mailto:alfonso.ordonez@tecmm.edu.mx'},
        {nombre: 'Mtro. Oscar Daniel Zamora Cuevas', image:"http://tecmm.edu.mx/imagesReact/images/directores/Oscar-Daniel-Zamora-Cuevas.jpg", cargo: 'Unidad Académica Puerto Vallarta', telefono:"322-226-56 00", correo:'daniel.zamora@tecmm.edu.mx', mailTo:'mailto:daniel.zamora@tecmm.edu.mx'},
        {nombre: 'Dr. Juan Antonio González Arechiga Ramírez Wiella', image:"http://tecmm.edu.mx/imagesReact/images/directores/Juan-Antonio-Gonzalez-Arechiga-Ramirez-Wiella.jpg", cargo: 'Unidad Académica Zapopan', telefono:"36-82-11-80", correo:'antonio.gonzalezarechiga@tecmm.edu.mx', mailTo:'mailto:antonio.gonzalezarechiga@tecmm.edu.mx'},
        {nombre: 'Mtro. Héctor Dávalos Tinajero', image:"http://tecmm.edu.mx/imagesReact/images/directores/Hector-Davalos-Tinajero.jpg", cargo: 'Unidad Académica Zapotlanejo', telefono:"373-73-56060", correo:'hector.davalos@tecmm.edu.mx', mailTo:'mailto:hector.davalos@tecmm.edu.mx'},

      ],
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
