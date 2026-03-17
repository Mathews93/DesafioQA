Feature: Registro de Form de Estudante

Scenario: Submeter formulário com sucesso
    Given que acesso o site DemoQA
    And acesso a seção Forms
    When preencho o formulário corretamente
    And submeto o formulário
    Then devo ver a mensagem de sucesso
    And fecho o modal