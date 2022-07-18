import React, {useState} from 'react';
import './App.css';

function App () {

  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {

    if (!newItem) {
      alert("Wpisz coś gościu");
      return;
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    };

    setItems(oldList => [...oldList,item]);
    setNewItem("")
  }

  function deleteItem (id) {
      const newArray = items.filter(item => item.id !== id);
      setItems(newArray)
  }

  return (  
    <div className = "App"> 
        <h1>To do List</h1>

        <input 
        type="text" 
        placeholder="Title.." 
        value={newItem}
        onChange = {e => setNewItem(e.target.value)}>
        
        </input> 
        <button onClick = {(e) => addItem()} >Add</button>

      <ul>
            {items.map(item => {
              return(
                <li key={item.id}>{item.value} <button className="deleteBtn" onClick={() => deleteItem(item.id)}><i class="fa-solid fa-xmark"></i></button></li>
              )
            })}
      </ul>

    
  

    </div>
  );
}

export default App;
