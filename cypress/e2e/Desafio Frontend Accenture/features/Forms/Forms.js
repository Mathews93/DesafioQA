import HomePage_PO from '../../../support/pageObjects/Homepage_PO'
import PracticeFormPage from '../../../support/pageObjects/PracticeFormPage'
/// <reference types ="Cypress" />

describe("Testar os forms do ToolsQA", () => {
    //Acessando o site do DemoQA
    beforeEach(() => {
        //cy.visit(("https://demoqa.com/"))
        const homepage_PO = new HomePage_PO();
        homepage_PO.visitarHomepage();
        //Escolher a opção Forms na página inicial
        homepage_PO.clicar_Forms_Button()
    });


    it("Deve ser possível submeter o Student Registration Form", () => {
        const practiceFormPage = new PracticeFormPage();

        //Clicar no submenu Practice Form
        practiceFormPage.clicar_PracticeForms_Button();

        //Preencher o formulário com valores aleatórios
        practiceFormPage.preencherNome("Mathews", "Cavalcanti");
        practiceFormPage.preencherEmail("mnunes1@yopmail.com");
        practiceFormPage.selecionarGenero('Male');
        practiceFormPage.preencherTelefone("8199999999");
        practiceFormPage.preencherDataNascimento();
        practiceFormPage.preencherSubjects();


        //O arquivo utilizado para upload está na pasta cypress/fixtures, e se chama Teste.txt
        practiceFormPage.uploadArquivo();

        //Continuando a preencher o formulário com valores aleatórios
        practiceFormPage.selecionarHobbies(['Sports', 'Music']);
        practiceFormPage.preencherEndereco("Rua Fulana de Tal, 80, Rio Doce, Olinda, PE");
        practiceFormPage.selecionarEstadoECidade('NCR', 'Delhi');

        //Submeter o formulário
        practiceFormPage.submeter();

        //Garantir que o popup foi aberto após o submit
        practiceFormPage.validarModal();

        //Fechar o popup:
        //Identifiquei um bug na UI, onde o botão "Close" desse modal popup não está funcional.
        //Nesse caso, o workaround para prosseguir com o teste foi clicar fora do popup.
        practiceFormPage.fecharModal();

        //Garantir que popup foi fechado após o workaround
        cy.get('.modal-content').should('not.exist');
    });
})