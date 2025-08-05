import React from 'react'
import UserCard from './components/UserCard';
import Arjuna from '../src/assets/Arjuna.png';
import Duryodhana from '../src/assets/Duryodhana.png';
import Krishna from '../src/assets/Krishna.png';


import "./App.css";

const App = () => {
  return (
    <div className='container'> 
    <UserCard name="Arjuna" description="Description" image={Arjuna}/>
    <UserCard name="Krishna" description="Description" image={Krishna}/>
    <UserCard name="Duryodhana" description="Description" image={Duryodhana}/>
    </div>

  )
}

export default App;