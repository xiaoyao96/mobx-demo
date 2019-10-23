import { observable, action } from 'mobx'


class CounterStore{
  @observable counter = 1;
  @action.bound
  add(){
    this.counter++;
  }
  @action.bound
  reduce(){
    this.counter--;
  }
}

export default CounterStore