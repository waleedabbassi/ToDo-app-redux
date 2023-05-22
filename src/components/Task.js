
import React,{ useState } from "react";
import { toggleTask, editTask, deleteTask } from '../js/action/actions';
import { connect } from 'react-redux';

const Task = ({ task, toggleTask, editTask, deleteTask }) => {
const [editMode, setEditMode] = useState(false);
const [editedDescription, setEditedDescription] = useState(task.description);

const handleToggle = () => {
    toggleTask(task.id);
};

const handleDelete = () => {
    deleteTask(task.id);
};

const handleEdit = () => {
    setEditMode(true);
};

const handleSave = () => {
    if (editedDescription.trim() !== "") {
    editTask(task.id, editedDescription);
    setEditMode(false);
    }
};

return (
    <li>
    {!editMode ? (
        <>
        <input
            type="checkbox"
            checked={task.isDone}
            onChange={handleToggle}
        />
        <span>{task.description}</span>
        <button onClick={handleEdit}>Edit</button>
        </>
    ) : (
        <>
        <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={handleDelete}>Delete</button>
        </>
    )}
    </li>
);
};

export default connect(null, { toggleTask, editTask, deleteTask })(Task);
