import React, {useState} from 'react';
import './App.css';
// import styled from 'styled-components'


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
      value: newItem, 
      completed: false
    };
    
      setItems(oldList => [...oldList, item]);
      setNewItem("");
    }
    
    function toggleComplete (id) {
      const newArrayOfItems = items.map(item => {
        if (item.id === id) { 
          
          return {
          ...item,
          completed: true
        }
        } else { 
          return item
        } 
      }) 
      
      setItems(newArrayOfItems)  
    } 


    function deleteBtn (id) {
      const newArray = items.filter(item => item.id !== id);
      setItems(newArray);
    }
    console.log(items)


  return(
    <div className="App">
      <h1>To Do list </h1>
      <input 
      type="text"
      placeholder="Title"
      value= {newItem}
      onChange={e => setNewItem(e.target.value)} 
      className="search-input"
      />

      <button onClick={() => addItem()} className="search-btn"> Add </button>

      <ul>
      {items.map((item, completed) => {
        return (
          <li key={item.id} onClick={() => toggleComplete(item.id)} className={item.completed ? 'completed' : ''  }>{item.value} <button onClick={() => deleteBtn(item.id)} className="deleteBtn"><i className="fa-solid fa-xmark"></i></button>
          </li>
        )
      })}  
    </ul>

  </div>
  )
};
  
export default App;

// className={item.completed ? false  : "" }

//onClick={() => toggleComplete(item.id)} className={item.completed ? `${completed}` : ""} 