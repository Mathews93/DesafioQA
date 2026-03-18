import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import HomePage_PO from '../pageObjects/Homepage_PO'
import PracticeFormPage from '../pageObjects/PracticeFormPage'

const homepage_PO = new HomePage_PO();
const practiceFormPage = new PracticeFormPage();

Given("acesso a seção Forms", () => {
    homepage_PO.clicar_Forms_Button();
});

When("preencho o formulário corretamente", () => {
    practiceFormPage.clicar_PracticeForms_Button();

    practiceFormPage.preencherInfosBasicas("Mathews", "Cavalcanti", "mnunes1@yopmail.com", 'Male', "8199999999")
    practiceFormPage.preencherDataNascimento();
    practiceFormPage.preencherSubjects();
    practiceFormPage.uploadArquivo();
    practiceFormPage.selecionarHobbies(['Sports', 'Music']);
    practiceFormPage.preencherEnderecoEstadoECidade("Rua Fulana de Tal, 80, Rio Doce, Olinda, PE", 'NCR', 'Delhi');
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