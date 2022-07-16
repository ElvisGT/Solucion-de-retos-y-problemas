class iATM {
  constructor(denominations) {
    this.denominations = denominations;
    this.keys = Object.keys(this.denominations).sort((a, b) => b - a);
    this.change = Object.keys(denominations).reduce((change, key) => {
      change[key] = 0;
      return change;
    }, {});
  }

  validateAccount(idNumber) {
    this.abstractMethodError();
  }

  changeMoney(moneyAmount) {
    this.abstractMethodError();
  }

  getChange() {
    this.abstractMethodError();
  }

  refill(denomination, quantity) {
    this.abstractMethodError();
  }

  abstractMethodError() {
    throw new Error('This is an abstract method you must implement it');
  }
}

export class basicATM extends iATM {
  constructor(denominations) {
    super(denominations);
  }

  changeMoney(moneyAmount) {
    this.keys.forEach((key) => {
      let value = this.denominations[key];
      let amount = Math.min(value, Math.floor(moneyAmount / key));
      moneyAmount -= amount * key;
      this.change[key] = amount;
      this.denominations[key] -= amount;
    });
  }

  getChange() {
    console.log('Please take your change:');
    Object.keys(this.change).forEach((key) => {
      if (this.change[key]) console.log(`${key} x ${this.change[key]}`);
    });
    console.log('Thanks for using our ATM');
  }

  refill(denomination, quantity) {
    this.denominations[denomination] += quantity;
  }
}
