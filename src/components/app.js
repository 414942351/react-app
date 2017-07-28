import React from 'react'
import ReactDOM from 'react-dom'
import TodoHeader from './TodoHeader'
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: []
		}
	}
	addTodo(item) {
		this.state.todos.push(item)
		this.setState({
			todos: this.state.todos
		});
	}
	render() {
		return (
			<div className="todo-wrapper">
				 <TodoHeader addTodo={this.addTodo.bind(this)} />
			</div>
		)
	}
}
ReactDOM.render(<App />, document.getElementById('app'));