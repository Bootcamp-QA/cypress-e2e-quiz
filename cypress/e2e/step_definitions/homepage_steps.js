import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";


  Given("the user visit homepage", () => {
    //Visita la pagina
    cy.visit("/quiz.php?id=10723");
    
    //Acepta las cookies si aparece, sino no hace click. Busca el boton que contenga el texto AGREE
    cy.contains("AGREE").should('exist').click();

  });

  When("the user select answer {string}", (answer) => {
    //Busca elemento que tenga el texto exacto
    cy.contains(new RegExp(`^${answer}$`)).click()
  });

  When("the user click on submit answers", () => {
    //Busca el elemento que contenga el texto submit answers
    cy.contains("Submit Answers").click()
  });

  Then("the user see score {string}", (scoretext) => {
    //buscamos el elemento que contenga el texto y comprobamos que esta visible
    cy.contains(scoretext).should('be.visible');
  });
 
  Then("the user see score letter {string}", (scoreletter) => {
    //obtener el elemento con la clase .gigantic que es la que contiene la letra de la puntuacion
    cy.get(".gigantic").should('have.text',scoreletter);
  });

  Then("the user see for question {string} correction {string}", (questionnumber,correctiontext) => {
    //1. obtenemos el elemento con la pregunta indicada 1,2,3... (contains)
    //2. obtenemos el padre (la caja que contiene a la pregunta) (parent)
    //3. dentro del padre, buscamos la palabra Wrong o Correct (correctiontext) usando filter y contains
    cy.contains("Question #"+questionnumber).parent().parent().filter(':contains("'+correctiontext+'")').should('be.visible');
  });

  
