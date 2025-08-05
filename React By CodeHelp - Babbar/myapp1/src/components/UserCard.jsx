import React from 'react';
import Arjuna from '../assets/Arjuna.png';
import Duryodhana from '../assets/Duryodhana.png';
import Krishna from '../assets/Krishna.png';


import './UserCard.css';

const UserCard = (props) => {
  return (
    <div className='user-container'>
        <p id='user-name'>{props.name}</p>
        <img id='user-img' alt='img' src={props.image} />
        <p id='user-description'>{props.description} of {props.name}</p>
    </div>
  );
};

export default UserCard;
