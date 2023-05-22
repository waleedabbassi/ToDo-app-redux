import React from 'react';
import { connect } from 'react-redux';
import { toggleTask, editTask, deleteTask, setFilter } from '../js/action/actions';
import Task from '../components/Task';

const ListTask = ({ tasks, filter}) => {

const filteredTasks = 
    filter === 'all'
    ? tasks
    : filter === 'done'
    ? tasks.filter((task) => task.isDone)
    : tasks.filter((task) => !task.isDone);
    
const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    setFilter(selectedFilter);
};

return (
    <div>
    <div>
        <label htmlFor="filter">Filter:</label>
        <select id="filter" value={filter} onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="done">Done</option>
        <option value="not-done">Not Done</option>
        </select>
    </div>
    <ul>
        {filteredTasks.map((task) => (
        <Task
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            editTask={editTask}
            deleteTask={deleteTask}
        />
        ))}
    </ul>
    </div>
);
};

const mapStateToProps = (state) => ({
tasks: state.tasks,
filter: state.filter,
});

export default connect(mapStateToProps, { toggleTask, editTask, deleteTask, setFilter })(ListTask);


