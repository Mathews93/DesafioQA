class SortablePage {
    ordenarListaOrdemDecr(Itemsindex) {
        for (let i = 0; i < Itemsindex; i++) {
            cy.get('.vertical-list-container .list-group-item')
                .first()
                .drag('.vertical-list-container .list-group-item:last', {
                    force: true,
                    position: 'bottom'
                });
        }
    }

    ordenarListaOrdemCres(Itemsindex) {
        for (let i = 0; i < Itemsindex; i++) {
            cy.get('.vertical-list-container .list-group-item')
                .last()
                .drag('.vertical-list-container .list-group-item:first', {
                    force: true,
                    position: 'top'
                });
        }
    }

    resetarEstadoVisual() {
        // Nota: Essa função foi feita para garantir que nenhuma instabilidade do drag and drop específico do DemoQA
        //atrapalhe a validação da ordem do array.
        // O que acontecia: que após ele dar drag no último item (Six), a comparação dava erro, porque
        //por algum motivo, o "mouse up" não era concluído completamente.

        // O código abaixo limpa as classes de estado e remove o estilo inline (o background cinza)
        cy.get('.vertical-list-container .list-group-item')
            .invoke('attr', 'class', 'list-group-item list-group-item-action') // Reseta classes
            .invoke('removeAttr', 'style'); // Remove qualquer estilo inline 'travado'
    }

    validarOrdemLista(initialOrder) {
        cy.log(initialOrder)
        cy.get('.vertical-list-container .list-group-item').then(($items) => {
            const currentTexts = [...$items].map(el => el.innerText.trim());
            expect(currentTexts).to.deep.equal(initialOrder);
        });
    }

}
export default SortablePage;