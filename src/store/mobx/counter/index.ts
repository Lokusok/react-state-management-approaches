import { makeAutoObservable } from 'mobx';

class CounterStore {
  count: number = 1;
  amount: number = 1;
  activeAction: TCounterAction = null;

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.count += this.amount;
  }

  decrement() {
    this.count -= this.amount;
  }

  setAmount(amount: number) {
    this.amount = amount;
  }

  setActiveAction(activeAction: TCounterAction) {
    this.activeAction = activeAction;
  }

  get nextCounter() {
    const nowAction = this.activeAction;
    const amount = this.amount;

    let value = null;

    if (nowAction === 'increment') value = amount;
    else if (nowAction === 'decrement') value = -amount;

    if (value === null) return null;

    return this.count + value;
  }
}

const counterStore = new CounterStore();

export default counterStore;
