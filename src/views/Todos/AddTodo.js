import React from 'react';

class AddTodo extends React.Component {
    state = {
        title: ''
    }
    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleAddTodo = (event) => {
        if (!this.state.title) {
            alert("missing title")
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 10000),
            title: this.state.title
        }
        this.props.addNewToDo(todo);
        this.setState({
            title: ''
        })
    }
    render() {
        let { title } = this.state;
        return (
            <div className="add-todo">
                <input
                    type="text"
                    value={title}
                    onChange={(event) => this.handleOnChangeTitle(event)}
                />
                <button
                    type="button"
                    className="add"
                    onClick={(event) => this.handleAddTodo(event)}
                >Add</button>
            </div>
        )
    }
}

export default AddTodo;