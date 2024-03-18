// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';





  const style = {
      background : "yellow",
      color : "red",
      padding : "10px",
      height :"200px",
      width : "400px",
      margin : "0 auto",
      marginTop : '10px',
      border : "2px solid",    
      textAlign: "center",
      text: "warp",

    } ;
  
    const first = {
      title : "First Component",
      description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati temporibus numquam culpa perspiciatis. Sunt officia maxime fugiat eveniet pariatur perspiciatis ut eius placeat earum, corporis, recusandae nulla fugit sequi ducimus!"
    }
    
    const second = {
      title : " Second Component",
      description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati temporibus numquam culpa perspiciatis. Sunt officia maxime fugiat eveniet pariatur perspiciatis ut eius placeat earum, corporis, recusandae nulla fugit sequi ducimus!"
    }
  

  const persons = ["Mohammad", "Hasan", "Hossain", "Allah Only One"]



  const three  = {
      title : 'Three',
      description : 'Number Three Component'
   }
    
function App() {
  return (
    <div className="App">
      <h2>My First React</h2>
   
      <ComponentOne id={first}></ComponentOne>
      <Counter></Counter>
      {persons.map(person => 
        <ul style={{background: "gray", width: "300px" , margin :"10px auto " }} ><li>{person}</li></ul>)
      }
      <ComponentTwo id={second}></ComponentTwo>
      <ComponentThree boxTitle ={three}></ComponentThree>
   
    </div>
  );
}


function Counter () {
  const [count, setCount] = useState(2);
  const increase = () => setCount(  count + 1)
  const decrease = () => setCount(  count - 1)
  return (
          <div style={{border : "2px solid", padding :"3px", background : 'red'}}>
            <h3>Counter : {count}</h3>
            <button style={{marginRight :"10px"}} onClick={decrease}>Decrease</button>
            <button  onClick={increase}>Increase</button>
          </div>
  )
}

function ComponentOne(props){
    return ( 
            <div style={style}>
                <h2>Component : <u>{props.id.title}</u> </h2>
                <p style={{color: "green"}}>hello...! im here thre {props.id.description} </p>    
            </div>
      );
}

function ComponentTwo(props) {
    return ( 
      <div style={style}>
        <h2 style={{color: "green"}}>Component : <u>{props.id.title}</u> </h2>
        <p style={{color: "red"}}>hello...! im here thre... {props.id.description} </p>
      </div>
  );
} 


function ComponentThree ({boxTitle}) {
  const {title,description} = boxTitle;
      return (
          <div style={style}>
            <h2> {title} Componnent</h2>
            <p>hello there im {description}</p>
          </div>
      )
}
export default App;
