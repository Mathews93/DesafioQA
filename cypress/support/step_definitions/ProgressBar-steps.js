import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import ProgressBarPage from '../pageObjects/ProgressBarPage'

const progressBarPage = new ProgressBarPage();

Given("acesso a seção Widgets", () => {
    cy.get("a[href*='widgets']").click();
});

Given("acesso o submenu Progress Bar", () => {
    cy.get('a[href="/progress-bar"]').should('be.visible').click()
});
// Cenário 1 - Progress Bar 25%

When("eu clico no botão Start", () => {
    cy.get('#startStopButton').click({ force: true });
});

When("eu paro antes dos 25%", () => {
    progressBarPage.PararProgressBar(20, 25)
});


Then("o valor da progress bar é menor ou igual a 25%", () => {
    progressBarPage.progressBarMenorOuIgual(25)
});

// Cenário 2 - Progress Bar 100% e reset

When("eu aperto Start novamente", () => {
    cy.get('#startStopButton').click({ force: true });
});


Then("ao chegar a 100%, a progress bar é resetada", () => {
    progressBarPage.resetAposTotalFill()
});