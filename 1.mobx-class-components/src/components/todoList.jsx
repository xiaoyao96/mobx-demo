import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject('store')
@observer
class TodoList extends Component{
  state = {
    val: ''
  }
  /** 输入变化 */
  inputChange = (e) => this.setState({val: e.currentTarget.value})



  render(){
    const {store} = this.props
    return (
      <div>
        <h1>todolist:</h1>
        <input onInput={this.inputChange} type="text" />
        <button onClick={() => store.pushItem(this.state.val)}>+</button>
        <ul>
          {
            store.todoList.map(item => (
              <li key={item.id}>
                <span>{item.name}</span>
                <button onClick={() => item.changeFinish(true)}>finish</button>
                <button onClick={() => store.dropItem(item.id)}>x</button>
                <span>{item.finish ? '√' : ''}</span>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default TodoList