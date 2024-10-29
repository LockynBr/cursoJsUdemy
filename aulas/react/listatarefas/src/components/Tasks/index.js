import React from 'react';
import PropTypes from 'prop-types';
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Tasks.css';

export default function Tasks({ tasks, handleEdit, handleDelete }) {
  return (
    <ul className="tasks">
      {tasks.map((task, index) => (
        <li key={task}>
          {task}
          <span>
            <FaEdit
              onClick={(e) => handleEdit(e, index)}
              className="buttonEdit"
            />
            <FaWindowClose
              onClick={(e) => handleDelete(e, index)}
              className="buttonDelete"
            />
          </span>
        </li>
      ))}
    </ul>
  );
}

Tasks.propTypes = {
  handleEdit: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  tasks: PropTypes.string.isRequired,
};
