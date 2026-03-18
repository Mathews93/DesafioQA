import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import BrowserWindowsPage from '../pageObjects/BrowserWindowsPage'

const browserWindowsPage = new BrowserWindowsPage();

Given("acesso a seção Alerts, Frame & Windows", () => {
    browserWindowsPage.clicarAlertsFrameWindows();
});

When("clico em Browser Windows", () => {
    browserWindowsPage.clicarBrowserWindows();
});

When("clico no botão New Windows", () => {
    browserWindowsPage.clicarBotaoNewWindow()
});

Then("uma nova janela deve ser aberta com a mensagem {string}", (mensagemEsperada) => {
    browserWindowsPage.validarMensagemNewWindow(mensagemEsperada)
})

Then("retorno para a página principal", () => {
    // Cypress não suporta múltiplas abas, então simulamos o fechamento retornando à página original
    cy.visit("/browser-windows");
})

