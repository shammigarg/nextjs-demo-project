import {useState} from "react"
import './App.css';




// function App() {
//   // let counter = 15;

//  const [counter, setCounter] = useState(15)


// const addValue = ()=>{
//   if (counter < 20){
//     setCounter(counter+1);
//   } else {
//     setCounter(counter)
//   }

// }

// const removeValue = ()=>{
//   if (counter > 0){
//     setCounter(counter-1);
//   } else {
//     setCounter(counter)
//   }
// }


//   return (
//    <div>
//      <h1>React Counter Practice</h1>
//      <h2>Counter Value: {counter}</h2>
//      <button onClick={addValue}> Increase Value</button>
//      <br/>
//      <button onClick={removeValue}>Decrease Value </button>
//    </div>
 
//   )
   
// }


function MyApp(){
  const [color, setColor] = useState("cyan")
  return (
    <div>
    <div style={{backgroundColor: color, width:'100rem', height:"100rem"}}
    >
    <h2>backgroundColor changer</h2>
    <div>
      <button onClick={()=>setColor("red")} >Red</button>
      <button onClick={()=>setColor("blue")} >Blue</button>
      <button onClick={()=>setColor("green")}>Green</button>
      <button onClick={()=>setColor("olive")}>Olive</button>
      <button onClick={()=>setColor("yellow")}>Yellow</button>
    </div>
    </div>
   
    </div>
  )
}

export default MyApp;
