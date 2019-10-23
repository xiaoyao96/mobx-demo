import { observable, action } from 'mobx'

class Todo{
  id: number = Math.random();
  @observable name: string = ''
  @observable finish: boolean = false

  constructor(name: string){
    this.name = name;
  }

  @action.bound
  changeFinish(val: boolean){
    this.finish = val;
  }
}

class TodoListStore{
  
  @observable todoList: Todo[] = []

  @action.bound
  pushItem(name: string){
    this.todoList.push(new Todo(name))
  }

  @action.bound
  dropItem(id: number){
    let index = this.todoList.findIndex(item => item.id === id);
    if(index > -1){
      this.todoList.splice(index, 1)
    }
  }
}

export default TodoListStore