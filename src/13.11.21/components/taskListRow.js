import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class TaskListRow extends Component {
    render() {
        const { index, name } = this.props;
        return (
            <div className="task-list-row">
                <span>{index}</span>
                <span>{name}</span>
                <button>edit</button>
                <button>delete</button>
            </div>
        )
    }
}

TaskListRow.propTypes = {
    handleDelete : PropTypes.func,
    handleEdit: PropTypes.func,
    name: PropTypes.string,
    index: PropTypes.number,
}