class BrowserWindowsPage {

    clicarAlertsFrameWindows() {
        cy.get("a[href*='alertsWindows']").click();
    }

    clicarBrowserWindows() {
        cy.get("a[href*='browser-windows']").click();
    }

    clicarBotaoNewWindow() {
        cy.window().then((win) => {
        cy.stub(win, 'open').as('windowOpen')
        })
        
        cy.get('#windowButton').click()
    }

    validarMensagemNewWindow(mensagemEsperada) {
        cy.get('@windowOpen').then((stub) => {
        // Cypress por padrão não suporta múltiplas janelas/abas
        // Nesse caso, o teste pega a URL que seria aberta
        const url = stub.getCall(0).args[0]

        // Visita essa URL na mesma aba
        cy.visit(url)

        // E valida o texto esperado
        cy.contains(mensagemEsperada).should('be.visible')
    })
    }
}

export default BrowserWindowsPage;