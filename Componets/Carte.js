import React, { Component } from "react";
import "./Carte.css";

const renderNum = number => {
  number = number.toString();
 let res = "";
 for (let i = 0; i < number.length; i += 4) {
   res += number.slice(i, i + 4) + " ";
 }
  return res; };
  
  
class Carte extends Component {
  state = {
    number: "",
    valid: "",
    name: ""
  }
  renderValid = (e) => {
    
    if(e.target.value.length<=5 &&  (e.target.value.substring(0,2))<13 ){
      if(e.target.value.length<=3 && !isNaN(+e.target.value.replace("/",0))){
      this.setState({valid : e.target.value})
      }
      if(e.target.value.length ==2 && this.state.valid.indexOf("/")==-1) {
      this.setState({valid : e.target.value + "/"  } )
      }
      if(e.target.value.length>=3 && !isNaN(+e.target.value.replace("/",0))) {
      this.setState({valid:e.target.value})
      }
        }

    
    
     
   }
   changeNum=(e)=>{
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
       this.setState({number: e.target.value})
    }
 }

  //  changeNum=(e)=>{
  //   const re = /^[0-9\b]+$/;
  //   if (e.target.value === '' || re.test(e.target.value) ) {
  //      this.setState({number: e.target.value})
  //   }
  // }

  changeName = event => {
    this.setState({
      name: event.target.value.toUpperCase()
    });
  };
  
 changeVal = ee=>{
    this.setState({
        valid: ee.target.value
    });
 }

  render() {
    return (
      <div className="container-credit">
        <div className="card">
          <div className="head-card">
            <h1>HBI</h1>
            <h6>WORLD DEBIT</h6>
          </div>
          <div className="body-card">
            <div className="soc">soc</div>
            <div className="card-number">{renderNum(this.state.number)}</div>
          </div>
          <div className="valid-card">{this.state.valid}</div>
          <div className="name-card" >{this.state.name}</div>
        </div>
        <form className="form" name="myForm">
          <input
            placeholder="card number..."
            type="text"
            name="num"
            maxLength="16"
            onChange={this.changeNum}
          />
          <input
            placeholder="your name..."
            type="text"
            name="name"
            maxLength="20"
            onChange={this.changeName}
          />
          <input
            placeholder="valid MM/YY"
            type="text"
            maxLength="4"
            name="val"
            onChange={this.renderValid}
          />
        </form>
      </div>
    );
  }
}
export default Carte;
