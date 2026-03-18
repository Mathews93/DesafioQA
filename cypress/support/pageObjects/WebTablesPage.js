class WebTablesPage {
    makeArrayUsuario(firstName, lastName, email, age, salary, department) {
        return {
            firstName,
            lastName,
            email,
            age,
            salary,
            department
        };
    }

    submitUsuario(usuario) {
        cy.get("#addNewRecordButton").click();

        cy.get("#firstName").type(usuario.firstName);
        cy.get("#lastName").type(usuario.lastName);
        cy.get("#userEmail").type(usuario.email);
        cy.get("#age").type(usuario.age);
        cy.get("#salary").type(usuario.salary);
        cy.get("#department").type(usuario.department);

        cy.get("#submit").click();
    }

    editarUltimoRegistro() {
        cy.get('[title=Edit]').last().click({ force: true });

        cy.get("#firstName").clear().type("Editado");

        cy.get("#submit").click();
    }

    makeArrayMultiUserGenerico(index, usuarios) {
        for (let i = 0; i < index; i++) {
            usuarios.push({
                firstName: `User${i}`,
                lastName: "Teste",
                email: `user${i}_${Date.now()}@test.com`,
                age: "30",
                salary: "4000",
                department: "IT"
            });
        }
    }

    submitMultiplosUsuarios(usuarios) {
        // Uso do wrap por conta da natureza assíncrona do Cypress
        // Usando um "for" estava quebrando o código, por assincronia do conteúdo de registrosCriados
        cy.wrap(usuarios).each((usuario) => {
            cy.get('select').closest('.flex-grow-1').find('select').select('20');
            cy.get("#addNewRecordButton").click();

            cy.get("#firstName").type(usuario.firstName);
            cy.get("#lastName").type(usuario.lastName);
            cy.get("#userEmail").type(usuario.email);
            cy.get("#age").type(usuario.age);
            cy.get("#salary").type(usuario.salary);
            cy.get("#department").type(usuario.department);

            cy.get("#submit").click();
        });
    }

    validarRegistros(registrosCriados){
        registrosCriados.forEach((usuario) => {
        cy.contains(usuario.firstName).should("be.visible");
    });
    }

    deletarRegistrosUserGenerico() {
    // Buscamos todas as células (td) que começam com "User" seguido de números
    // Usamos .each() para iterar sobre os elementos encontrados no DOM
    cy.get('td').contains(/^User\d+/).each(($el) => {
        // Para cada célula encontrada:
        cy.wrap($el)
          .closest('tr')          // Sobe para a linha (parent tr)
          .find('[title="Delete"]') // Busca o botão de deletar dentro dessa linha
          .click({ force: true });
          
        // Pequena espera implícita para o DOM processar a remoção
        cy.wrap($el).should('not.exist');
    });
    }

    validarNaoExistenciaRegistros(registrosCriados) {
        registrosCriados.forEach((usuario) => {
            // Verifica em uma única linha que nenhum dos nomes no padrão "UserX" existe
            cy.contains('.rt-td', /^User\d+$/).should('not.exist');
    });
    }
}

export default WebTablesPage;