import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Footer'
import Headers from "./components/Headers"
import MainContent from './components/MainContent'
import Footer from './components/Footer';
import TodoItem from './components/TodoItem';
import todoData from './todoData';


// function App() {
//   const todoItems = todoData.map(item => <TodoItem key ={item.id} item = {item}/>)
//   return (
//     <div className="App">
//       <header className="App-header">
//         <div className= "todo-list">
//      {todoItems}
//       </div>
//       {/* <Headers/>
//       <MainContent/>
//       <Footer/> */}
//       </header>
//     </div>
//   );
// }

class App extends React.Component{
  render(){
    return (
      <div>
        <Header name ="saras"/>
        <Greeting/>
      </div>
    )
  }
}

class Header extends React.Component{
  render(){
    return (
      <header> welcome, {this.props.name} !</header>
    )
  }
}
class Greeting extends Component{
  render(){
   const date = new Date()
   const hours = date.getHours()
   let timeoffDay 
   if(hours < 12)
   timeoffDay = ("Am!")
   else if (hours >12)
   timeoffDay= ("Pm")

  return (
    <h3> Good day to you Now time {hours}{timeoffDay} </h3>
  )
}
}

export default App;
