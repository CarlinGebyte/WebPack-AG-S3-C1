import React, { Component } from "react";
import TittleName from "../componentes/TittleName";
import MyImg from "../componentes/MyImg";
import EducationTittle from "../componentes/EducationTittle";
import ExperienceTittle from "../componentes/ExperienceTittle";

class Container extends Component {
  render() {
    return (
      <div>
        <div>
          <TittleName />
          <MyImg />
        </div>
        <div>
            <EducationTittle/>
            <h5>MisionTIC 2022</h5>
            <h3>Universidad Sergio Arboleda</h3>
            <p>Diplomado - 800 Horas - Python - JS - Java Spring</p>
            <h5>Técnico en Matenimiento de Equipos de cómputo</h5>
            <h3>SENA</h3>
            <p>Mantenimiento a computadoras e instalación de cableado estructurado</p>
        </div>
        <div>
            <ExperienceTittle/>
            <h5>Desarrollador FrontEnd - Moderador Hemisferio Sur</h5>
            <p>Febrero 02 hasta actualidad</p>
        </div>
      </div>
    );
  }
}
export default Container;
