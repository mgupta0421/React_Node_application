import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import './App.css';

function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    
  }, []);

  return (
    <div className="App">
      <h1>Item List</h1>
      <ItemList items = {items} />
      </div>
      );
}

export default App;
