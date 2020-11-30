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

  getVenusAge() {
    let venusAge = this.inputAge/0.62;
    venusAge = parseFloat(venusAge.toFixed(2));
    return venusAge;
  }

  getVenusExpectancy() {
    let venusExpectancy = this.inputExpectancy/0.62;
    venusExpectancy = parseFloat(venusExpectancy.toFixed(2));
    return venusExpectancy;
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

  getJupiterAge() {
    let jupiterAge = this.inputAge/11.86;
    jupiterAge = parseFloat(jupiterAge.toFixed(2));
    return jupiterAge;
  }

  getJupiterExpectancy() {
    let jupiterExpectancy = this.inputExpectancy/11.86;
    jupiterExpectancy = parseFloat(jupiterExpectancy.toFixed(2));
    return jupiterExpectancy;
  }

}