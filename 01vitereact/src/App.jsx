import { useState } from "react"

function App() {
  let [counter,setcounter]=useState(0)
    const  addvalue = ()=>{
      if(counter < 20) {
        setcounter(counter + 1)
      }
    }
    const removevalue = ()=>{
      if(counter > 0) {
        setcounter(counter - 1)
      }
    }
    return (
      <>
    <h1>hello click on add and remove</h1>
    <h2>value : {counter}</h2>
    <button onClick={addvalue}>add value</button>
    <br /><br />
    <button onClick={removevalue}>remove value</button>
    </>
    
  );
}
export default App
