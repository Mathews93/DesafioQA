import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import HomePage_PO from '../pageObjects/Homepage_PO'

const homepage_PO = new HomePage_PO();

Given("que acesso o site DemoQA", () => {
    homepage_PO.visitarHomepage();
});