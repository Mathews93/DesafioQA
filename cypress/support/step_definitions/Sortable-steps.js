import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

//Foi necessário importar o plugin abaixo, já que essa lista Drag & Drop não funcionou com .trigger + mouse actions: 
import '@4tw/cypress-drag-drop' 
import SortablePage from '../pageObjects/SortablePage'

const sortablePage = new SortablePage();

let initialOrder = [];

Given("acesso a seção Interactions", () => {
    cy.get("a[href*='interaction']").click();
});

Given("acesso o submenu Sortable", () => {
    cy.get('a[href="/sortable"]').should('be.visible').click()
});

When("eu salvo a ordem inicial", () => {
    cy.get('.vertical-list-container .list-group-item').then(($items) => {
        initialOrder = [...$items].map(el => el.innerText)
    })
});

When("eu ordeno a lista em ordem decrescente", () => {
    sortablePage.ordenarListaOrdemDecr(5);
});

When("eu ordeno a lista de volta para crescente", () => {
    sortablePage.ordenarListaOrdemCres(5);
});

Then("a lista deve estar em ordem crescente", () => {
    sortablePage.resetarEstadoVisual();

    sortablePage.validarOrdemLista(initialOrder);
});