import React from 'react'
import { useState } from 'react';

export const Tabs = ({tab}) => {
   
    console.log(tab);
    const [activeTab, setActiveTab] = useState(0);
 
    
  return (
    
    <div className="mainContainer">
      <div className="main">
       {tab.map((item, index)=>(
         <div className="tabButton">
            <button  className = "button" key = {index} onClick={()=>setActiveTab(index)}>{item.label}</button>
           
         </div>
       ))}
       
    </div>
     <div className="content">
            <p>{tab[activeTab].content}</p>
      </div>
    </div>
    
    
  )
}

