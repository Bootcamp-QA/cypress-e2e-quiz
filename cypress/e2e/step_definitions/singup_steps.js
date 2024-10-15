import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";


  Given("the user visit signup page", () => {
    //Visita la pagina
    cy.visit("/signup");

    //Limpiar las cookies. No es necesario usarla porque cypress las limpia por defecto.
    cy.clearAllCookies();

    //Recargar la pagina
    cy.reload();

  });