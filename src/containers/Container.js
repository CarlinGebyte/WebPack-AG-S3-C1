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
            <p>Diplomado - 4 cursos - Python - JS - Java Spring</p>
            <h3></h3>
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
