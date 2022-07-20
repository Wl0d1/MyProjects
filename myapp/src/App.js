import React, {useState} from 'react';
import './App.css';
// import styled from 'styled-components'

// const Wrapper = styled.div`
// background-color: #f7f8fa;
// display: flex;
// justify-content: center;
// align-items: center;
// width: 100%;
// height: 100vh;
// `;

function App () {



  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);


  function addItem() {
    if (!newItem) {
      alert("wpisz cos gosciu")
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    };

    setItems(oldList => [...oldList, item]);
    setNewItem("");
  }

    function deleteBtn (id) {
      const newArray = items.filter(item => item.id !== id);
      setItems(newArray);
    }

  return(
    <div className="App">
      <h1>To Do list </h1>
      <input 
      type="text"
      placeholder="dodaj cos"
      value= {newItem}
      onChange={e => setNewItem(e.target.value)} 
      />

      <button onClick={() => addItem()}> Add </button>

      <ul>
      {items.map(item => {
        return (
          <li key={item.id}>{item.value} <button onClick={() => deleteBtn (item.id)}><i class="fa-solid fa-xmark"></i></button>
          </li>
        )
      })}  
    </ul>
  </div>
  )
};
  
export default App;