export default class planets {
  constructor(inputAge, inputExpectancy) {
    this.inputAge = inputAge;
    this.inputExpectancy = inputExpectancy;
  }

  getMercuryAge() {
    let mercuryAge = parseFloat((this.inputAge/0.24).toFixed(2));
    return mercuryAge;
  }

  getMercuryExpectancy() {
    let mercuryExpectancy = parseFloat((this.inputExpectancy/0.24).toFixed(2));
    return mercuryExpectancy;
  }

  getVenusAge() {
    let venusAge = parseFloat((this.inputAge/0.62).toFixed(2));
    return venusAge;
  }

  getVenusExpectancy() {
    let venusExpectancy = parseFloat((this.inputExpectancy/0.62).toFixed(2));
    return venusExpectancy;
  }

  getMarsAge() {
    let marsAge = parseFloat((this.inputAge/1.88).toFixed(2));
    return marsAge;
  }

  getMarsExpectancy() {
    let marsExpectancy = parseFloat((this.inputExpectancy/1.88).toFixed(2));
    return marsExpectancy;
  }

  getJupiterAge() {
    let jupiterAge = parseFloat((this.inputAge/11.86).toFixed(2));
    return jupiterAge;
  }

  getJupiterExpectancy() {
    let jupiterExpectancy = parseFloat((this.inputExpectancy/11.86).toFixed(2));
    return jupiterExpectancy;
  }

  checkAgeAgainstExpectancy(planetAge, planetExpectancy) {
    if(planetAge > planetExpectancy) {
      return true;
    } else {
      return false;
    }
  }


  livedPastExpectancy(planetAge, planetExpectancy) {
      const yearsPastExpectancy = parseFloat((planetAge - planetExpectancy).toFixed(2));
      return yearsPastExpectancy;
  }

  yearsLeftOnPlanet(planetAge, planetExpectancy) {
      const planetaryYearsLeft = parseFloat((planetExpectancy - planetAge).toFixed(2));
      return planetaryYearsLeft;
  }
}