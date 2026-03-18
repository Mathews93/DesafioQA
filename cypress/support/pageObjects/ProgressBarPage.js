class ProgressBarPage {
    PararProgressBar(porcentagemInicial, porcentagemFim) {
        cy.get('#progressBar').should(($el) => {
            const value = parseInt($el.text().replace('%', ''))

            // Espera até estar perto de 25
            expect(value).to.be.greaterThan(porcentagemInicial)
            expect(value).to.be.lte(porcentagemFim)
        })
        cy.get('#startStopButton').click({ force: true });
    }

    progressBarMenorOuIgual(porcentagem) {
        cy.get('#progressBar')
            .invoke('text')
            .then((text) => {
                const value = parseInt(text.replace('%', ''))
                expect(value).to.be.lte(porcentagem)
            })
    }

    resetAposTotalFill() {
        cy.get('#progressBar', { timeout: 15000 }).should(($el) => {
            const value = parseInt($el.text().replace('%', ''))

            // Hardcoded nesse caso, já que o botão Reset só aparece após a barra preencher 100%
            expect(value).to.be.eq(100)
        })
        cy.get('#resetButton').click({ force: true });
    }
}

export default ProgressBarPage;