import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject('store')
@observer
class Counter extends Component{
  render(){
    const { store } = this.props
    return (
      <div>
        <h1>couter:</h1>
        <div>{store.counter}</div>
        <button onClick={store.add}>+</button>
        <button onClick={store.reduce}>-</button>
      </div>
    )
  }
}

export default Counter;