import React, { Component } from "react";
import TittleName from "../componentes/TittleName";
import MyImg from "../componentes/MyImg";
import EducationTittle from "../componentes/EducationTittle";

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
        </div>
      </div>
    );
  }
}
export default Container;
