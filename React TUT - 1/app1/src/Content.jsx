import React from 'react'
import reactLogo from './assets/react.svg'
const Content = () => {

    const handleNameChange = () =>{
    const names = ['Lokesh','Bhanu'];
    const i = Math.floor(Math.random() * 3);
    return names[i];
  }

  return (
    <>

    <div> Hello {handleNameChange()}!</div>
    
    <div>
    <img src={reactLogo} alt="React Image" />
    </div>
    
    </>
  )
}

export default Content;