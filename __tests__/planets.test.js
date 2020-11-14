// Planet class has the properties age and life expectancy
// age and life expectancy are user input
// year length is handled by each planet method

import planet from "./../src/js/planets.js";

describe('planets', () => {
  beforeEach(() => {
    let Planet = new planet(21, 80)
  });
    test('should take user age and l.e., and return them based on a mars year', () => {
      expect(Planet.mars).toEqual(11.1, 42.5);
    });
});