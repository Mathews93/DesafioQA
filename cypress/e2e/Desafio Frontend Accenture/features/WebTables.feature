Feature: Tabelas da Web

    Background:
        Given que acesso o site DemoQA
        And acesso a seção Elements
        And acesso o submenu Web Tables

    Scenario: Criar, Editar e Deletar Registros
        When eu crio um novo registro
        And edito o registro criado
        And deleto o registro criado
        Then o registro não deve mais estar visível na tabela

    Scenario: Criar múltiplos registros dinamicamente
        When eu crio 12 novos registros dinamicamente
        Then os 12 registros devem estar visíveis na tabela
        When eu deleto todos os novos registros criados
        Then os 12 registros não devem estar visíveis na tabela