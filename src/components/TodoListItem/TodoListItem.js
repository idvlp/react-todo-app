import React, { Component } from 'react';
import './TodoListItem.css'

export default class TodoListItem extends Component {

    render() {
        const { label, onDeleted,
            onToggleDone, onToggleImportant,
            important, done } = this.props;
        let classNames = "todo-list-item";
        if (important) {
            classNames += ' important'
        }
        if (done) {
            classNames += ' done';
        }
        return (
            <span className={classNames}>
                <span
                    className="todo-list-item-label"
                    onClick={onToggleDone}
                >
                    {label}
                </span>
                <button
                    type="button"
                    className="btn border border-success text-success rounded  float-right"
                    onClick={onToggleImportant}
                >
                    <i className="fa fa-exclamation"></i>
                </button>
                <button
                    type="button"
                    className="btn rounded border-danger border text-danger float-right"
                    onClick={onDeleted}
                >
                    <i className="fa fa-trash" />
                </button>
            </span>



        )
    }
}