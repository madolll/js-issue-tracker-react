import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


/**** name your component with a cap letter ***/
// class Yolo extends React.Component {
//   render(){
//     return(
//       <div>
//         <p> {this.props.text} </p>
//         <p> {this.props.age} </p>
//         <p> {this.props.name} </p>
//       </div>
//     )
//   }
// }

class Avatar extends React.Component {
  render() {
    return (
      <img src={this.props.img} />
    )
  }
}

class Label extends React.Component {
  render() {
    return (
      <h1>Name:{this.props.name} </h1>
    )
  }
}

class ScreenName extends React.Component {
  render() {
    return (
      <h3>Username:{this.props.username} </h3>
    )
  }
}

class Badge extends React.Component {
  render() {
    return (
      <div>
        <Avatar
          img='https://avatars0.githubusercontent.com/u/2933430?v=3&s=460'/>
        <Label
          name='Tyler McGinnis'/>
        <ScreenName
          username='tylermcginnis' />
      </div>
    )
  }
}




class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <Badge/>
        </div>
      </div>
    );
  }
}



export default App;
