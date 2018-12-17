import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';


class App extends Component {
  constructor(props){
      super(props);
      this.state = {
        input: '',
        output: ''
      };
  }
  changeHandle(event){
    this.setState({
        input: event.target.value
    });
  }
  fetchData(type,message){
    var typeMessage = type+"Message";
    var options = {};
    if(type === "decode"){
      options = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body:JSON.stringify({
  	      decodeMessage : message
        })
      }
    }else if(type === "encode"){
       options = {
        method: "POST",
        headers: {"Content-Type": "application/json; charset=utf-8"},
        body:JSON.stringify({
  	      encodeMessage : message
        })
      }
    }
    try {
      fetch("http://localhost:8080/api/fence/"+type, options)
      .then(response => response.json())
      .then(data => this.setState({ output: data.result }));
      console.log(this.state.output);
    }catch (error){
      console.error("Error is:" +error);
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Card className="card" style={{padding:20}}>
            <Typography>Fence Cipher</Typography>
            <Input id="text" value={this.state.input} onChange={this.changeHandle.bind(this)}></Input>
            <div>
              <Button style={{width:100}} variant="contained" color="primary" onClick={()=>{this.fetchData("encode",this.state.input)}}>ENCODE</Button>
              <Button style={{width:100}} variant="contained" color="primary" onClick={()=>{this.fetchData("decode",this.state.input)}}>DECODE</Button>
            </div>
            <TextField style={{fontSize:200}} disabled id="filled-error" margin="normal" variant="filled" value={this.state.output}></TextField>
          </Card>
        </div>
      </div>
    );
  }
}

export default App ;
