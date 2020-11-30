export default class planets {
  constructor(inputAge, inputExpectancy) {
    this.inputAge = inputAge;
    this.inputExpectancy = inputExpectancy;
  }

  getMarsAge() {
    let marsAge = this.inputAge/1.88;
    marsAge = parseFloat(marsAge.toFixed(2));
    return marsAge;
  }

  getMarsExpectancy() {
    let marsAge = this.inputExpectancy/1.88;
    marsAge = parseFloat(marsAge.toFixed(2));
    return marsAge;
  }

}