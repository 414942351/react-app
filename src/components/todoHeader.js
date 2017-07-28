import React from 'react'
export default class TodoHeader extends React.Component {
	handlerkeyUp(e) {
		let value = e.target.value;
		if(!value) {
			return false;
		}
		let newTodoItem = {
			text: value,
			isDone: false
		};
		e.target.value = '';
		this.props.addTodo(newTodoItem);
	}
	render() {
		return (
			<div className="todo-header">
				<input onKeyUp={this.handlerkeyUp.bind(this)} type="text" placeholder="请输入你的任务名称，按回车键确认" />
			</div>
		)
	}
}