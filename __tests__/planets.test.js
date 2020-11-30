// Planet class has the properties age and life expectancy
// age and life expectancy are user input
// year length is handled by each planet method

import planets from "./../src/js/planets.js";

describe('planets', () => {
  test('should take user age, and return a converted value based on a mars year', () => {
      const Planet = new planets(21, 80);
      const marsAge = Planet.getMarsAge();
      expect(marsAge).toEqual(11.17);
    });

  test('should take user life expectancy, and return a converted value based on a mars year', () => {
      const Planet = new planets(21, 80);
      const marsExpectancy = Planet.getMarsExpectancy();
      expect(marsExpectancy).toEqual(42.55);
    });

    test('should take user age, and return a converted value based on a venus year', () => {
        const Planet = new planets(21, 80);
        const venusAge = Planet.getVenusAge();
        expect(venusAge).toEqual(33.87);
      });
  
    test('should take user life expectancy, and return a converted value based on a venus year', () => {
        const Planet = new planets(21, 80);
        const venusExpectancy = Planet.getVenusExpectancy();
        expect(venusExpectancy).toEqual(129.03);
      });

    test('should take user age, and return a converted value based on a mercury year', () => {
      const Planet = new planets(21, 80);
      const mercuryAge = Planet.getMercuryAge();
      expect(mercuryAge).toEqual(87.5);
    });

    test('should take user life expectancy, and return a converted value based on a mercury year', () => {
      const Planet = new planets(21, 80);
      const mercuryExpectancy = Planet.getMercuryExpectancy();
      expect(mercuryExpectancy).toEqual(333.33);
    });
    
    test('should take user age, and return a converted value based on a jupiter year', () => {
      const Planet = new planets(21, 80);
      const jupiterAge = Planet.getJupiterAge();
      expect(jupiterAge).toEqual(1.77);
    });

    test('should take user life expectancy, and return a converted value based on a jupiter year', () => {
      const Planet = new planets(21, 80);
      const jupiterExpectancy = Planet.getJupiterExpectancy();
      expect(jupiterExpectancy).toEqual(6.75);
    });
});