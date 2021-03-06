import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/css/styles.css';
import planets from "../src/js/planets.js";

$("#ageForm").submit((event) => {
  $("#output").empty();
  
  const inputAge = $("#ageInput").val();
  const inputExpectancy = $("#expectancyInput").val();
  const Planet = new planets(inputAge, inputExpectancy);
  const listOfPlanets = ["Mercury", "Venus", "Mars", "Jupiter"];

  listOfPlanets.forEach((planet) => {
    $("#output").append("<p>Your age on " + planet + " is " + Planet[`get${planet}Age`]() + "</p>");
    $("#output").append("<p>Your life expectancy on " + planet + " is " + Planet[`get${planet}Expectancy`]() + "</p>");
    const ageGreaterThanExpected = Planet.checkAgeAgainstExpectancy(Planet[`get${planet}Age`](), Planet[`get${planet}Expectancy`]());
    if(ageGreaterThanExpected == true) {
      const expectancyYears = Planet.livedPastExpectancy(Planet[`get${planet}Age`](), Planet[`get${planet}Expectancy`]());
      $("#output").append("<p>You have lived " + expectancyYears + " past your life expectancy on "+ planet + "!</p>");
    } else {
      const expectancyYears = Planet.yearsLeftOnPlanet(Planet[`get${planet}Age`](), Planet[`get${planet}Expectancy`]());
      $("#output").append("<p>You have " + expectancyYears + " years expected left on  "+ planet + "!</p>");
    }
    $("#output").append("<br>");
  });
  event.preventDefault();
});