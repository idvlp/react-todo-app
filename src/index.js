import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList/';
import SearchPanel from './components/SearchPanel/';
import AppHeader from './components/AppHeader/';
import ItemStatusFilter from './components/ItemStatusFilter/';

import './index.css'

export default class App extends Component{

  state = {
    todoData: [
      { label: 'Drink coffee', important: false, id: 1 },
      { label: "Make awesome app", important: true, id: 2 },
      { label: "Have a lunch", important: false, id: 3 }
    ]
  }

  onDeleted(id) {
    this.setState( (state) => {
      let resultArray = state.todoData.filter(el => el.id !== id);      
      return {
        todoData: resultArray
      }
    })
  }

  render() {
  
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
  
        <TodoList todos={this.state.todoData} onDeleted={(id) => this.onDeleted(id)}/>
      </div>
    )
  }
  
}



ReactDOM.render(<App />, document.getElementById('root'));
