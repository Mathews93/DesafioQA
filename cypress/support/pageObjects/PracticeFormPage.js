class PracticeFormPage {

    clicar_PracticeForms_Button(){
        cy.get("a[href*='automation-practice-form']").click();
    }

    preencherNome(nome, ultimonome) {
        cy.get('#firstName').type(nome);
        cy.get('#lastName').type(ultimonome);
    }

    preencherEmail(email) {
        cy.get('#userEmail').type(email);
    }

    selecionarGenero(genero) {
        const generos = {
        Male: '#gender-radio-1',
        Female: '#gender-radio-2',
        Other: '#gender-radio-3'
        };

        cy.get(generos[genero]).click({ force: true });
    }

    preencherTelefone(numero) {
        cy.get('#userNumber').type(numero);
        cy.get('#userNumber').invoke('val').should('have.length', 10)
    }

    preencherDataNascimento() {
        cy.get('#dateOfBirthInput').click();
        cy.get('.react-datepicker__year-select').select('1993');
        cy.get('.react-datepicker__month-select').select('September');
        cy.contains('.react-datepicker__day', '25').click();
    }

    preencherSubjects() {
        cy.get('.subjects-auto-complete__control').type('Comp');
        cy.contains('Computer Science').click();
    }

    uploadArquivo() {
        cy.get('#uploadPicture').selectFile('cypress/fixtures/Teste.txt');
    }

    selecionarHobbies(hobbies) {
        hobbies.forEach(hobby => {
        cy.contains('label', hobby).click();
        });
    }

    preencherEndereco(endereco) {
        cy.get('#currentAddress').type(endereco);
    }

    selecionarEstadoECidade(estado, cidade) {
        cy.get('#state').click();
        cy.get('#react-select-3-input').type(estado);
        cy.contains('div', estado).click();

        cy.get('#react-select-4-input').type(cidade);
        cy.contains('div', cidade).click();
    }

    submeter() {
        cy.get('#submit').click();
    }

    validarModal() {
        cy.get('.modal-header')
          .should('be.visible')
          .and('contain.text', 'Thanks for submitting the form');
    }

    fecharModal() {
        cy.get('body').click(0, 0);  
    }
}

export default PracticeFormPage;