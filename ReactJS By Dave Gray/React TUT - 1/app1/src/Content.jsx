import React from 'react'


const Content = () => {

    const handleNameChange = () =>{
    const names = ['Lokesh','Bhanu'];
    const i = Math.floor(Math.random() * 3);
    return names[i];
  }

  const handleClick = () =>{
    console.log("You clicked it");
  }

  const handleClick2 = (name) =>{
    console.log(`${name} was clicked` );
  }

  const handleClick3 = (e) =>{
    console.log(e.target.innerText);
  }

  return (
    <>
    <main>
    <p onDoubleClick = {handleClick()}> Hello {handleNameChange()}!</p>
    </main>
    
    <div>
    <button onClick = {handleClick()}>Click Me!</button>
    <button onClick = {()=> handleClick2('Lokesh')}>Click It</button>
    <button onClick= {(e)=> handleClick3(e)}>Click it</button>
    </div>
    
    </>
  )
}

export default Content;