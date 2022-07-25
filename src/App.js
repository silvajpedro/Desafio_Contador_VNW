import React, { Component } from "react";
import './App.css'
import zero from './imgs/novozero.png';
import um from './imgs/novoum.png';
import dois from './imgs/novodois.png';
import tres from './imgs/novotres.png';
import quatro from './imgs/novoquatro.png';
import cinco from './imgs/novocinco.png';
import seis from './imgs/novoseis.png';
import sete from './imgs/novosete.png';
import oito from './imgs/novooito.png';
import nove from './imgs/novonove.png';
import dez from './imgs/novodez.png';

export default class App extends Component {
  state = {
    numero: 0,
    imagens: [ zero, um, dois, tres, quatro, cinco, seis, sete, oito, nove, dez]
  }
  // adicionar = () => {
  //   if (this.state.numero == 0) {
  //   } else if (this.state.numero == 1) {
  //     return (<div>
  //       <img src={um} />
  //     </div>)
  //   } else if (this.state.numero == 2) {
  //     <div>
  //       <img src={dois} />
  //     </div>
  //   } else if (this.state.numero == 3) {
  //     <div>
  //       <img src={tres} />
  //     </div>
  //   } else if (this.state.numero == 4) {
  //     <div>
  //       <img src={quatro} />
  //     </div>
  //   } else if (this.state.numero == 5) {
  //     <div>
  //       <img src={cinco} />
  //     </div>
  //   } else if (this.state.numero == 6) {
  //     <div>
  //       <img src={seis} />
  //     </div>
  //   } else if (this.state.numero == 7) {
  //     <div>
  //       <img src={sete} />
  //     </div>
  //   } else if (this.state.numero == 8) {
  //     <div>
  //       <img src={oito} />
  //     </div>
  //   } else if (this.state.numero == 8) {
  //     <div>
  //       <img src={nove} />
  //     </div>
  //   } else if (this.state.numero == 10) {
  //     <div>
  //       <img src={dez} />
  //     </div>
  //   }
  //   this.setState({
  //     numero: this.state.numero + 1
  //   })
  // }

  add = () => {
    if (this.state.numero < 10) {
      this.setState({
        numero: this.state.numero + 1
      })
    } else if (this.state.numero >= 10) {
      alert("O contador chegou ao seu número limite por favor retroceda!")
    }

  }

  diminuir = () => {
    if (this.state.numero > 0) {
      this.setState({
        numero: this.state.numero - 1
      })
    } else {
      alert("O contador chegou ao seu limite por favor adicione!")
    }
  }

  reiniciar = () =>{
    this.setState({
      numero:0
    })
  }
  render() {
    if (this.state.numero == 0) {
      document.body.style.backgroundColor = "#FF4A00"
    } else if (this.state.numero == 1) {
      document.body.style.backgroundColor = "#41F323"
    } else if (this.state.numero == 2 ) {
      document.body.style.backgroundColor = "#05DAB7"
    } else if(this.state.numero == 3){
      document.body.style.backgroundColor = "#0D00CE"
    } else if (this.state.numero == 4) {
      document.body.style.backgroundColor = "#FF0000"
    } else if(this.state.numero == 5){
      document.body.style.backgroundColor = "#FF0CED"
    }else if(this.state.numero == 6){
      document.body.style.backgroundColor = "#AC00FF"
    }else if (this.state.numero == 7) {
      document.body.style.backgroundColor = "#19DCFF"
    } else if (this.state.numero == 8) {
      document.body.style.backgroundColor = "#D36400"
    } else if (this.state.numero == 9) {
      document.body.style.backgroundColor = "#FFDD00"
    } else if (this.state.numero == 10) {
      document.body.style.backgroundColor = "#93FB00"
    }

    return (

      <div className="firstDiv">

   
          <button className="firstButton" onClick={this.add}>Adicionar</button>
          <img src={this.state.imagens[this.state.numero]}/>
          <button onClick={this.diminuir}>Diminuir</button>
          {/* {this.state.imagens[(this.state.numero)]} */}
          {/* colocar como img */}
          <button className="middleButton" onClick={this.reiniciar}>Reiniciar</button>

      </div>
    )
  }
}
