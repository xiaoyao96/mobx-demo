import { observable, action } from 'mobx'

class Todo{
  id = Math.random();
  @observable name = ''
  @observable finish = false

  constructor(name){
    this.name = name;
  }

  @action.bound
  changeFinish(val){
    this.finish = val;
  }
}
class Store{
  @observable counter = 1;
  @action.bound
  add(){
    this.counter++;
  }
  @action.bound
  reduce(){
    this.counter--;
  }


  @observable todoList = []

  @action.bound
  pushItem(name){
    this.todoList.push(new Todo(name))
  }

  @action.bound
  dropItem(id){
    let index = this.todoList.findIndex(item => item.id === id);
    if(index > -1){
      this.todoList.splice(index, 1)
    }
  }
}

export default Store