import React, { Component } from 'react'

export default class NavbarBtn extends Component {
    state = {
        namebtn: this.props.namebtn
    }

    navBarBtnStyle (){
        return {
            backgroundColor: '#253030',
            fontSize: '14px',
            borderRadius: '12px',
            color: 'white',
            boder: '2px solid #FFFFFF'
        }
    }

    render() {
        return (
            <div>
                 <button type="button" style={this.navBarBtnStyle()}>{this.props.namebtn}</button> 
            </div>
        )
    }
}
