import React from 'react';
import './TodoListItem.css'

const TodoListItem = ({ label, important = false }) => {

    const style = {
        color: important ? 'steelblue' : 'black',
        fontWeight: important ? 'bold' : 'normal'
      };

    return (
        <div className='todo-list-item'>
            <span style={style}>{label}</span>
            <button type="button" className="btn border border-success text-success rounded  float-right">
                <i class="fa fa-exclamation"></i>
            </button>
            <button type="button" className="btn rounded border-danger border text-danger float-right">
                <i className="fa fa-trash" />
            </button>

        </div>

    )
}

export default TodoListItem;