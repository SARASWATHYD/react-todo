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
     <button onClick = {handleClick}>  create</button>
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
//       count : 0
//     } 
//     this.handleClick = this.handleClick.bind(this)
//   }
//     handleClick(){
//       this.setState(prevState => {
//         return {count : prevState.count+1}
//       })
//     }
//   render(){
//     return (
//       <div>
//         <h1>{this.state.count } </h1>
//         <button onClick = {this.handleClick}> click me</button>
//       </div>
//     )
//   }
// }



export default App;
