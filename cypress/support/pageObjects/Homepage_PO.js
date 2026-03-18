class HomePage {
    
    visitarHomepage() {
        cy.visit("https://demoqa.com/");
    }

    clicar_Forms_Button() {
        cy.get("a[href*='forms']").click();
    }
}
export default HomePage;