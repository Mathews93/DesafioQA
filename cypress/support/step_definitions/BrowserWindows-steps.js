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

Then("uma nova janela deve ser aberta com a mensagem", () => {
    cy.get('@windowOpen').should('be.called');
});