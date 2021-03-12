import React, { Component } from 'react'

/*Componentes*/
import NavbarBtn from './NavbarBtn'

export default class Navbar extends Component {

    estiloNavbar () {
        return {
            lineHeight: '2',
            borderRadius: '10px',
            background: '#253030',
            padding: '20px',
            width: '100%',
            height: '70px',
            float: 'left',
            margin: '0em 0 3em 0',
            padding: '0',
            listStyle: 'none'
        }
    }

    render() {
        return (
            <div>
              <ul style={this.estiloNavbar()} id="nav">
                  <NavbarBtn namebtn={"Inicio"}></NavbarBtn>
              </ul>
            </div>
        )
    }
}
