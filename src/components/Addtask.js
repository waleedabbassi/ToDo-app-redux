import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addTask } from '../js/action/actions';

const AddTask = ({addTask}) => {

const [description, setDescription] = useState('');

const handleSubmit = (e) => {
        e.preventDefault();
        if (description.trim() !==''){
        addTask(Date.now(),description);
        setDescription('');

    } 
    };

return (
    <form onSubmit={handleSubmit}>
    <input
        type="text"
        placeholder="Add a task"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
    />
    <button type="submit">Add todo </button>
    </form>
);
}


export default connect(null, { addTask })(AddTask);