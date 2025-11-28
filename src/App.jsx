import { useState } from 'react'
import react from 'react'
import './App.css'
import {Tabs} from './components/tab.jsx'

function App() {
  
// const [count, setCount] = useState(0);

// const clickHandler =()=>{
//   return setCount((prev)=>prev+1);
//   setCount((prev)=>prev+1);
// }
// console.log(count);

 const tabs = [{
  label:"tab 1",
  content:"this is tab one"
 },
 {
  label:"tab 2",
  content: "this is tab 2"
 }
]

  return (
    <>
      <div className="mainParent">
       <Tabs tab = {tabs}>
        
       </Tabs>
      </div>
      
    </>
  )
}



export default App
