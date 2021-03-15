import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList/';
import SearchPanel from './components/SearchPanel/';
import AppHeader from './components/AppHeader/';
import ItemStatusFilter from './components/ItemStatusFilter/';
import ItemAddForm from './components/ItemAddForm/';

import './index.css'

export default class App extends Component {

  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem('Drink coffee'),
      this.createTodoItem('Make awesome app'),
      this.createTodoItem('Have a lunch'),

    ]
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      let resultArray = todoData.filter(el => el.id !== id);
      return {
        todoData: resultArray
      }
    })
  }

  createTodoItem(label) {
    return {
      label,
      done: false,
      important: false,
      id: this.maxId++
    }
  }

  addItem = (text) => {
    this.setState(({ todoData }) => {
      let resultArray = [...todoData, this.createTodoItem(text)]
      console.log('resultArray: ', resultArray);

      return {
        todoData: resultArray
      }
    })
  }

  toggleProperty(arr, id, propName) {
    let resultArray = arr.map(el => {
      if (el.id === id) {
        return { ...el, [propName]: !el[propName] }
      }
      return el

    })
    return resultArray
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    })
  }

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    })
  }

  render() {

    const { todoData } = this.state
    const doneCount = todoData.filter(el => el.done === true).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={todoData}
          onDeleted={this.deleteItem}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
        <ItemAddForm onAddItem={this.addItem} />
      </div>
    )
  }

}



ReactDOM.render(<App />, document.getElementById('root'));
