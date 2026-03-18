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
}

export default BrowserWindowsPage;