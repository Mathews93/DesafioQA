import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import WebTablesPage from '../pageObjects/WebTablesPage'

const webTablesPage = new WebTablesPage();

var registrosCriados = [];

Given("acesso a seção Elements", () => {
    cy.get("a[href*='elements']").click();
});

Given("acesso o submenu Web Tables", () => {
    cy.get('a[href="/webtables"]').should('be.visible').click()
});

// Cenário 1 - CRUD

When("eu crio um novo registro", () => {
    const usuario = webTablesPage.makeArrayUsuario("Mathews", "Cavalcanti", `Mathews${Date.now()}@test.com`, "32", "5500", "QA");

    registrosCriados.push(usuario);

    webTablesPage.submitUsuario(usuario);
});

When("edito o registro criado", () => {
    webTablesPage.editarUltimoRegistro()
});

When("deleto o registro criado", () => {
    cy.get('[title="Delete"]').last().click({ force: true });
});

Then("o registro não deve mais estar visível na tabela", () => {
    cy.contains("Editado").should("not.exist");
});


// Cenário 2 - Múltiplos registros

registrosCriados = [];

When("eu crio 12 novos registros dinamicamente", () => {
const usuarios = [];

    webTablesPage.makeArrayMultiUserGenerico(12, usuarios);
    
    webTablesPage.submitMultiplosUsuarios(usuarios)
    
    registrosCriados = usuarios;
});

Then("os 12 registros devem estar visíveis na tabela", () => {
    webTablesPage.validarRegistros(registrosCriados)
});

When("eu deleto todos os novos registros criados", () => {
    webTablesPage.deletarRegistrosUserGenerico()
});

Then("os 12 registros não devem estar visíveis na tabela", () => {
    webTablesPage.validarNaoExistenciaRegistros(registrosCriados)
});
