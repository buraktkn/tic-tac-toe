import React, { useEffect, useState } from "react";
import "./index.css";

export default function Todo() {
  const [listItem, setListItem] = useState([
    { description: "Learn JavaScript", class: "view" },
    { description: "Learn React", class: "view" },
    { description: "Have a Life", class: "view" },
  ]);
  const [filteredList, setFilteredList] = useState([listItem]);
  const [newItem, setNewItem] = useState([]);

  useEffect(() => {
    setFilteredList(listItem);
  }, [listItem]);

  const onChangeInput = (e) => {
    setNewItem(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem.trim() === "") return;
    setListItem([...listItem, { description: newItem, class: "view" }]);
    setNewItem("");
  };
  function handleDelete(description) {
    const newList = listItem.filter((li) => li.description !== description);
    setListItem(newList);
  }
  function completeTask(description) {
    const updatedList = listItem.map((item) => {
      if (item.description === description) {
        return {
          ...item,
          class: item.class === "completed" ? "view" : "completed",
        };
      }
      return item;
    });
    setListItem(updatedList);
  }
  function completeAll() {
    const completedList = listItem.map((item) => ({
      ...item,
      class: item.class === "completed" ? "view" : "completed",
    }));
    setListItem(completedList);
  }
  function deleteAllCompleted() {
    const newViewList = listItem.filter((item) => item.class === "view");
    setListItem(newViewList);
  }
  function showAll() {
    const newActiveList = listItem.filter(
      (item) => item.class === "view" || item.class === "completed"
    );
    setFilteredList(newActiveList);
  }
  function showActive() {
    const newActiveList = listItem.filter((item) => item.class === "view");
    setFilteredList(newActiveList);
  }
  function showCompleted() {
    const newCompletedList = listItem.filter(
      (item) => item.class === "completed"
    );
    setFilteredList(newCompletedList);
  }
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
          <label for="toggle-all" onClick={completeAll}>
            Mark all as complete
          </label>
          <ul class="todo-list">
            {filteredList.map((item, index) => (
              <li key={index} class={item.class}>
                <div class="view">
                  <input
                    class="toggle"
                    type="checkbox"
                    checked={item.class === "completed"}
                    onChange={() => completeTask(item.description)}
                  />
                  <label property="text">{item.description}</label>
                  <button
                    class="destroy"
                    onClick={() => handleDelete(item.description)}
                  ></button>
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
            <li>
              <a href="#/" class="selected" onClick={showAll}>
                All
              </a>
            </li>
            <li>
              <a href="#/" onClick={showActive}>
                Active
              </a>
            </li>
            <li>
              <a href="#/" onClick={showCompleted}>
                Completed
              </a>
            </li>
          </ul>
          <button class="clear-completed" onClick={deleteAllCompleted}>
            Clear completed
          </button>
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
