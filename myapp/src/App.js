import React, {useState} from 'react';
import './App.css';
// import styled from 'styled-components'


function App () {

  const [newItem, setNewItem] = useState([""]);
  const [items, setItems] = useState([]); // modyfikowana 1 wartość przez 1 metodę.  [items,setItems]-destrukturyzacja tablicy


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
    
    const deleteHandle = (id) => {
      let updatedItems = items.filter((item) => item.id !== id)
      setItems(updatedItems)                                // jako argument podawany jest nowy stan
      // setItems(prevState => prevState.filter(item => item.id !== i)
      };
    
    
    const toggleComplete = (id) => {
      let newArrayOfItems = items.map(item => {
        if (item.id === id) { 
          
          return {
            ...item,
            completed: !item.completed
            
          }
        } else { 
          return item
          
        } 
      }) 
     setItems(newArrayOfItems) 
      } 


      

    console.log(items, 'dupa')
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
      

      <ul >
      {items.map((item) => {
        return ( 
          <div key = {item.id} className='items2' > 
          <li
          onClick={() => toggleComplete(item.id)} 
          className={item.completed ? 'completed' : ''}>{item.value} 
          </li>       
          <button className='far' onClick={() => deleteHandle(item.id)}>X</button> 
          </div>    
       )
       
      })}
      </ul>  
    </div>
  )
};

  
export default App;
 
// className={item.completed ? false  : "" }        key = {item.id}

//onClick={() => toggleComplete(item.id)} className={item.completed ? `${completed}` : ""} 

//  <button type='checkbox' className="deleteBtn" onClick={() => deleteHandle(item.id)}><i className="fa-solid fa-xmark"></i></button>

// {flexbox w css - dostosowac pozostale komponenty w css }