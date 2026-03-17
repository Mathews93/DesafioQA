import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import HomePage_PO from '../../support/pageObjects/Homepage_PO'
import PracticeFormPage from '../../support/pageObjects/PracticeFormPage'
/// <reference types ="Cypress" />

const homepage_PO = new HomePage_PO();
const practiceFormPage = new PracticeFormPage();

Given("que acesso o site DemoQA", () => {
    homepage_PO.visitarHomepage();
});

Given("acesso a seção Forms", () => {
    homepage_PO.clicar_Forms_Button();
});

When("preencho o formulário corretamente", () => {

    practiceFormPage.clicar_PracticeForms_Button();

    practiceFormPage.preencherNome("Mathews", "Cavalcanti");
    practiceFormPage.preencherEmail("mnunes1@yopmail.com");
    practiceFormPage.selecionarGenero('Male');
    practiceFormPage.preencherTelefone("8199999999");
    practiceFormPage.preencherDataNascimento();
    practiceFormPage.preencherSubjects();
    practiceFormPage.uploadArquivo();
    practiceFormPage.selecionarHobbies(['Sports', 'Music']);
    practiceFormPage.preencherEndereco("Rua Fulana de Tal, 80, Rio Doce, Olinda, PE");
    practiceFormPage.selecionarEstadoECidade('NCR', 'Delhi');
});

When("submeto o formulário", () => {
    practiceFormPage.submeter();
});

Then("devo ver a mensagem de sucesso", () => {
    practiceFormPage.validarModal();
});

Then("fecho o modal", () => {
    practiceFormPage.fecharModal();
    cy.get('.modal-content').should('not.exist');
});