import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";


  Given("the user visit homepage", () => {
    //Visita la pagina
    cy.visit("/");

  });