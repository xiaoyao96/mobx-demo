import { observable, action } from 'mobx'

class Store{
  @observable counter = 1;

  @action
  add(){
    this.counter++;
  }

  @action
  reduce(){
    this.counter--;
  }
}

export default Store