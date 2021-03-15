import React, { Component } from 'react';
import './TodoListItem.css'

export default class TodoListItem extends Component {

    state = {
        done: false,
        important: false
    }

    onImportantClick = () => {
        this.setState(({ important }) => {
            return {
                important: !important
            }
        })
    }

    onLabelClick = () => {
        this.setState(({ done }) => {
            return {
                done: !done
            }
        })
    }


    render() {
        const { label, onDeleted } = this.props
        const { important, done } = this.state;
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
                    onClick={this.onLabelClick}
                >
                    {label}</span>
                <button
                    type="button"
                    className="btn border border-success text-success rounded  float-right"
                    onClick={this.onImportantClick}
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