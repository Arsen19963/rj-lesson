import React, { Component } from 'react';
import TaskListRow from './taskListRow';
import PropTypes from 'prop-types';


export default class TaskList extends Component {
    render() {
        const { taskList } = this.props;
        return (
            <div>
                {
                    taskList && taskList.map((elem, index) => {
                        return <TaskListRow index={index} name={elem.name} />
                    })
                }
            </div>
        )
    }
}

TaskList.propTypes = {
    taskList: PropTypes.array,
}