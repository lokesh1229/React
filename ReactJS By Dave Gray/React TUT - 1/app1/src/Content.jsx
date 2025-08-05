import React, { useState } from "react";

import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {
  // const [name, setName] = useState('Lokesh');

  // const [count, setCount] = useState(0);

  // const handleNameChange = () => {
  //   const names = ['Lokesh', 'Bhanu'];
  //   const i = Math.floor(Math.random()*3); // only two names (0 and 1)
  //   setName(names[i]);
  // };

  // const handleClick = () => {
  //   console.log(count);
  // };

  // const handleClick2 = () => {
  //   console.log(setCount(count+1));
  // };

  // return (
  //   <>
  //     <main>
  //       <p onDoubleClick={handleClick}> Hello {name}!</p>
  //     </main>

  //     <div>
  //       <button onClick={handleNameChange}>Change Name!</button>
  //       <button onClick={() => handleClick2('Lokesh')}>Click It</button>
  //       <button onClick={handleClick2}>Click it</button>
  //     </div>

  //     <div>
  //       <p>You've Clicked {count} times</p>
  //       <button onClick = {()=> setCount(count+1)}>Click To Count</button>
  //     </div>
  //   </>
  // );

  const [items, setItems] = useState([
        {
            id: 1,
            checked: true,
            item: "One half pound bag of Cocoa Covered Almonds Unsalted"
        },
        {
            id: 2,
            checked: false,
            item: "Item 2"
        },
        {
            id: 3,
            checked: false,
            item: "Item 3"
        }
    ]);

    const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  return (
    <>
     <main>
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input
              type="checkbox"
              onChange={() => handleCheck(item.id)}
              checked={item.checked}
            />
            <label style={{ textDecoration: item.checked ? "line-through" : "none" }}>
              {item.item}
            </label>
            <FaTrashAlt role="button" tabIndex="0" />
          </li>
        ))}
      </ul>
    </main>

    </>
  );
};

export default Content;
