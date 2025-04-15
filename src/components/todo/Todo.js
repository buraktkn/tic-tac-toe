import React, { useState } from "react";
import "./index.css";

export default function Todo() {

    const [listItem, setListItem] = useState([
      {description:'Learn JavaScript'},
      {description:'Learn React'},
      {description:'Have a Life'}
    ]);
    const [newItem, setNewItem]= useState('');
    const onChangeInput = (e) =>{
      setNewItem(e.target.value)};

    const handleSubmit=(e)=>{
      e.preventDefault();
      if(newItem.trim()==="") return;
      
      setListItem([...listItem, {description : newItem}]);
      setNewItem('')
  }
  function handleDelete(description) {
    const newList=listItem.filter(li=>li.description !== description )
    setListItem(newList)
  };
  
  return (
    <div>
      <section class="todoapp">
        <header class="header">
          <h1>todos</h1>
          <form onSubmit={handleSubmit}>
            <input
              class="new-todo"
              placeholder="What needs to be done?"
              autoFocus
              value={newItem}
              onChange={onChangeInput}
            />
          </form>
        </header>
        <section class="main">
          <input class="toggle-all" type="checkbox" />
          <label for="toggle-all">Mark all as complete</label>
          <ul class="todo-list">
            {listItem.map((item,index)=>(
              <li key={index} class="view">
              <div class="view">
                <input class="toggle" type="checkbox" />
                <label>{item.description}</label>
                <button class="destroy" onClick={()=>handleDelete(item.description)}></button>
              </div>
            </li>
            ))}
          </ul>
        </section>

        <footer class="footer">
          <span class="todo-count">
            <strong>2</strong>
            items left
          </span>
          <ul class="filters">
            <li><a href="#/" class="selected">All</a></li>
            <li><a href="#/">Active</a></li>
            <li><a href="#/">Completed</a></li>
          </ul>

          <button class="clear-completed">Clear completed</button>
        </footer>
      </section>

      <footer class="info">
        <p>
          Created by <a>Burak Tekin</a>
        </p>
      </footer>
    </div>
  );
}
