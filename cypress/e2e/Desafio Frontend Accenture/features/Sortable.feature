Feature: Barra de Progresso

    Background:
        Given que acesso o site DemoQA
        And acesso a seção Interactions
        And acesso o submenu Sortable

    Scenario: Utilizar métodos de Drag and Drop
        When eu salvo a ordem inicial
        And eu ordeno a lista em ordem decrescente
        And eu ordeno a lista de volta para crescente
        Then a lista deve estar em ordem crescente
