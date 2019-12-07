import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Footer'
import Headers from "./components/Headers"
import MainContent from './components/MainContent'
import Footer from './components/Footer';
import TodoItem from './components/TodoItem';
import todoData from './todoData';

// //todo app with static data but date handled
// class ent extends React.Component {
//   constructor(){
//   super()
//     this.state ={
//       todos : todoData
//     }
//     this.handleChange = this.handleChange.bind(this)

//   }
//   handleChange(id){
//     this.setState(prevState =>{
//       const updatedTodo = prevState.todos.map(todo =>{
//         if(todo.id === id)
//           todo.completed = !todo.completed
//           return todo
//       })
//       return updatedTodo
//     })
//   }

 
//   render(){
//   const todoItems = this.state.todos.map(item => <TodoItem key ={item.id} item = {item}
//     handleChange={this.handleChange}/>)
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
// }

// //count sample

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
// // checking isLoggedIn state
// class App extends React.Component{

//   constructor(){
//     super()
//     this.state = {
//       isLoggedIn : false
//     } 
//     this.handleClick = this.handleClick.bind(this)
//   }
//     handleClick(){
//      this.setState(prevState=>{
//        return{
//        isLoggedIn : !prevState.isLoggedIn
//        }
//      })
//     }
//   render(){
//     let buttonText = this.state.isLoggedIn ? "LOG IN" :"LOG OUT"
//     let displayText = this.state.isLoggedIn ? "Logged In" : "Logged out"
//     return (
//       <div>
//         <button onClick = {this.handleClick}>{buttonText}</button>
//         <h1>{displayText} </h1>
//       </div>
//     )
//   }
// }

// class App extends React.Component{
//   constructor(){
//   super()
//   this.state = {
//     loading : false,
//     charector : {}
//   }
//   }
// componentDidMount(){
//   this.setState({loading : true})
//   fetch("https://swapi.co/api/people/1")
//   .then(response => response.json())
//   .then(data => 
//     {
//       this.setState({
//         loading : false,
//         charector:data})
//     })
// }

// render(){
//   const displayText = this.state.loading ? "Loading ..." : this.state.charector.name
//   return (
//     <div> {displayText}</div>
//   )
//   }
// }

//handling form with state 

 class App extends React.Component{
    constructor(){
      super()
      this.state = {
       firstName : "",
       lastName : "",
       isFriendly : false,
       gender : ""
      } 
      this.handleClick = this.handleClick.bind(this)
    }
      handleClick(event){
        //making copy of event target and setting state
        const {name,value,type,checked} = event.target

       type==="checkbox" ?this.setState({[name]:checked}) :this.setState(
         {[name] : value}
       )
      }
    render(){
      return(
      <form> 
        <input type = "text" name ="firstName" placeholder = "firstName.." onChange = {this.handleClick}/>
        <br/>
        <input type = "text" name ="lastName" placeholder = "lastName.." onChange = {this.handleClick}/>
        <br/>
        <textarea value={"some default value"}
        onChange = {this.handleClick}
        />
         <br/>
        <label>
        <input type ="checkbox" name ="isFriendly"  checked ={this.state.isFriendly} onChange ={this.handleClick}/>
        isFriendly
        </label>
         <br/>
        <label>
        <input type ="radio" name ="gender"  value ="male" checked ={this.state.gender === "male"} onChange ={this.handleClick}/>
        Male
        </label>
         <br/>
        <label>
        <input type ="radio" name ="gender"  value ="female" checked ={this.state.gender === "female"} onChange ={this.handleClick}/>
        Female
        </label>
      
        <h1> {this.state.firstName} {this.state.lastName}</h1>

           <h2> you are a {this.state.gender} </h2>
       
      </form>
      )
  }
}


export default App;
