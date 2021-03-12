import React, { Component } from 'react'
import './WalletForm.css'

export default class WalletForm extends Component {

    state = {
        nombreWallet: '' ,
        saldoWallet:'',
        descripcionWallet: ''
    }

    onSubmit = (e) => {
         e.preventDefault();
         console.log (this.state.saldoWallet, this.state.nombreWallet, this.state.descripcionWallet)
    }

    onChange = (e) =>{
        console.log (e.target.name, e.target.value);
        this.setState (
            {
                [e.target.name] : e.target.value,
            }
        )

    }


    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className='form'>
                    <label>Nombre de cuenta</label> 
                        <input type="text" 
                        placeholder="Ingrese nombre" 
                        name="nombreWallet" 
                        onChange={this.onChange}></input>

                    <label>Saldo</label>
                        <input type="number" 
                        name="saldoWallet" 
                        placeholder="Ingrese saldo cuenta" 
                        value={this.state.saldoWallet}
                        onChange={this.onChange}>
                        </input>
                        <textarea name="descripcionWallet" 
                        placeholder="Descripcion"
                        onChange={this.onChange}>
                        </textarea>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}
