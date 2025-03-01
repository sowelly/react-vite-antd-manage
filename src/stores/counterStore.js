import { makeAutoObservable } from 'mobx';

class CounterStore {
    value = 0;

    constructor() {
        makeAutoObservable(this); // 自动观察状态变化
    }

    increment() {
        this.value += 1;
    }

    decrement() {
        this.value -= 1;
    }
}

const counterStore = new CounterStore();
export default counterStore;