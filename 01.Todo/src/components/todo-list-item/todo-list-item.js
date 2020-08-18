import React from 'react';

import classNames from 'classnames';

import './todo-list-item.sass';

const TodoListItem = ({ label, onDeleted, onToggleImportant, onToggleDone, done, important }) => {

  const classes = classNames({
    'todo-list-item': true,
    'done': done,
    'important': important
  });

  return (
    <span className={ classes }>
      <span
        className="todo-list-item-label"
        onClick={ onToggleDone }
        >
        {label}
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right"
              onClick={ onToggleImportant }
              >
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right"
              onClick={ onDeleted }
              >
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};
export default TodoListItem;
