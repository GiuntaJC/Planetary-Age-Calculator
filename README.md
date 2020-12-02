# Planetary Age Calculator
## Week 5 Independent Project for Epicodus, 11.13.2020
## By Joseph C Giunta
# About This Project
This site was built for an independent Friday project at _Epicodus_. It takes the users inputed age and life expectancy, and returns converted values based on the years of other planets

# Setup

1. Download or clone this repository
3. run "npm install" in cmd in root
5. run "npm run start" in cmd in root

# Technologies Used
* Git
* GitHub
* HTML
* CSS
* Bootstrap
* Javascript
* Jquery
* Visual Studio Code
* NPM
* eslint
* babel
* webpack

# Specs
Test: should take user age, and return a converted value based on a mars year
  const Planet = new planets(21, 80);
expect(marsAge).toEqual(11.17);

Test: should take user life expectancy, and return a converted value based on a mars year
  const Planet = new planets(21, 80);
expect(marsExpectancy).toEqual(42.55);

Test: should take user age, and return a converted value based on a venus year
  const Planet = new planets(21, 80);
expect(venusAge).toEqual(33.87);

Test: should take user life expectancy, and return a converted value based on a venus year
  const Planet = new planets(21, 80);
expect(venusExpectancy).toEqual(129.03);

Test: should take user age, and return a converted value based on a mercury year
  const Planet = new planets(21, 80);
expect(mercuryAge).toEqual(87.5);

Test: should take user life expectancy, and return a converted value based on a mercury year
  const Planet = new planets(21, 80);
expect(mercuryExpectancy).toEqual(333.33);

Test: should take user age, and return a converted value based on a jupiter year
  const Planet = new planets(21, 80);
expect(jupiterAge).toEqual(1.77);

Test: should take user life expectancy, and return a converted value based on a jupiter year
  const Planet = new planets(21, 80);
expect(jupiterExpectancy).toEqual(6.75);

Test: Should check if user has lived past their l.e. and if so, return by how many years
  const Planet = new planets(81, 80);
expect(yearsPastExpectancy).toEqual(0.54); on mars

# Legal

Copyright 2020 Joseph C Giunta

This software is licensed under the MIT license.