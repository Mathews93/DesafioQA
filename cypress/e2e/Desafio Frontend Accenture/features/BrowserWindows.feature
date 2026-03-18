Feature: Navegar em uma Nova Janela

    Background:
        Given que acesso o site DemoQA
        And acesso a seção Alerts, Frame & Windows

    Scenario: Abrir nova janela e validar mensagem

        When clico em Browser Windows
        And clico no botão New Windows
        Then uma nova janela deve ser aberta com a mensagem "This is a sample page"
        And retorno para a página principal