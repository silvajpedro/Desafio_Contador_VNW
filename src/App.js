import React, { Component } from "react";
import './App.css'
import zero from './imgs/zero.png';
import um from './imgs/umdois.png';
import dois from './imgs/dois.png';
import tres from './imgs/tres.png';
import quatro from './imgs/quatro.png';
import cinco from './imgs/cinco.png';
import seis from './imgs/seis.png';
import sete from './imgs/sete.png';
import oito from './imgs/oito2.png';
import nove from './imgs/nove.png';
import dez from './imgs/dez.png';

export default class App extends Component {
  state = {
    numero: 0,
    imagens: [(<img src={zero} />), (<img src={um} />), (<img src={dois} />), (<img src={tres} />), (<img src={quatro} />), (<img src={cinco} />), (<img src={seis} />), (<img src={sete} />), (<img src={oito} />), (<img src={nove}/>), (<img src={dez} />)]
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

  add =() =>{
    if(this.state.numero < 10){this.setState({
      numero: this.state.numero +1
    })} else if(this.state.numero >= 10) {
      alert("O contador chegou ao seu número limite por favor retroceda!")
    }

  }

  diminuir = () =>{
    if(this.state.numero > 0){this.setState({
      numero: this.state.numero -1
    })} else {
      alert("O contador chegou ao seu limite por favor adicione!")
    }
  }

  render() {
    if(this.state.numero == 0){
      document.body.style.backgroundColor = "#FF0000"
    } else if(this.state.numero == 1){
       document.body.style.backgroundColor = "#FF6600"
    } else if(this.state.numero == 2 || this.state.numero == 3){
      document.body.style.backgroundColor = "#EF322A"
    }else if(this.state.numero == 4 || this.state.numero == 5 || this.state.numero == 6){
      document.body.style.backgroundColor = "#009439"
    } else if(this.state.numero == 7){
      document.body.style.backgroundColor = "#0202EF"
    } else if(this.state.numero == 8){
      document.body.style.backgroundColor = "#E40700"
    } else if(this.state.numero == 9){
      document.body.style.backgroundColor = "#EF322A"
    }else if(this.state.numero == 10){
      document.body.style.backgroundColor = "#E9578F"
    }
    return (
    
<div className="firstDiv">

      <div>
        <button className="firstButton"   onClick={this.add}>Adicionar</button>
        {this.state.imagens[(this.state.numero)]}
        <button onClick={this.diminuir}>Diminuir</button>
      </div>
 
</div>
    )
  }
}
