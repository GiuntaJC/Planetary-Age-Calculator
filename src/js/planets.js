export default class planets {
  constructor(inputAge, inputExpectancy) {
    this.inputAge = inputAge;
    this.inputExpectancy = inputExpectancy;
  }

  getMercuryAge() {
    let mercuryAge = this.inputAge/0.24;
    mercuryAge = parseFloat(mercuryAge.toFixed(2));
    return mercuryAge;
  }

  getMercuryExpectancy() {
    let mercuryExpectancy = this.inputExpectancy/0.24;
    mercuryExpectancy = parseFloat(mercuryExpectancy.toFixed(2));
    return mercuryExpectancy;
  }

  getMarsAge() {
    let marsAge = this.inputAge/1.88;
    marsAge = parseFloat(marsAge.toFixed(2));
    return marsAge;
  }

  getMarsExpectancy() {
    let marsExpectancy = this.inputExpectancy/1.88;
    marsExpectancy = parseFloat(marsExpectancy.toFixed(2));
    return marsExpectancy;
  }

}