import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Footer'
import Headers from "./components/Headers"
import MainContent from './components/MainContent'
import Footer from './components/Footer';
import TodoItem from './components/TodoItem';
import todoData from './todoData';


class App extends React.Component {
  constructor(){
  super()
    this.state ={
      todos : todoData
    }
  }
  render(){
  const todoItems = this.state.todos.map(item => <TodoItem key ={item.id} item = {item}/>)
  return (
    <div className="App">
      <header className="App-header">
        <div className= "todo-list">
     {todoItems}
      </div>
      {/* <Headers/>
      <MainContent/>
      <Footer/> */}
      </header>
    </div>
  );
}
}

// class App extends React.Component{
//   constructor(){
//     super()
//     this.state = {
//       isLoggedIn : false
    
//     } 
//   }
//   render(){
//     let wordDisplay;
//     if(this.state.isLoggedIn==true)
//     wordDisplay="in"
//     else  wordDisplay="out"

//     return (
//       <div>
//         <Header name ="saras"/>
//         <Greeting/>
//         <h1>you are currently logged {wordDisplay} </h1>
//       </div>
//     )
//   }
// }

// class Header extends Component{
//   render(){
//     return (
//       <header> welcome, {this.props.name} !</header>
//     )
//   }
// }
// class Greeting extends Component{
//   render(){
//    const date = new Date()
//    const hours = date.getHours()
//    let timeoffDay 
//    if(hours < 12)
//    timeoffDay = ("Am!")
//    else if (hours >12)
//    timeoffDay= ("Pm")

//   return (
//     <h3> Good day to you Now time {hours}{timeoffDay} </h3>
//   )
// }
// }

export default App;
