Feature: Barra de Progresso

    Background:
        Given que acesso o site DemoQA
        And acesso a seção Widgets
        And acesso o submenu Progress Bar

    Scenario: Validar progresso de 25%
        When eu clico no botão Start
        And eu paro antes dos 25%
        Then o valor da progress bar é menor ou igual a 25%

    Scenario: Validar progresso de 100% e resetar
        When eu aperto Start novamente
        Then ao chegar a 100%, a progress bar é resetada