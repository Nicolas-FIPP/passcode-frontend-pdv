# Código de Conduta

## Visão Geral

Este documento estabelece as diretrizes e boas práticas a serem seguidas por todos os colaboradores do projeto, assegurando um ambiente de desenvolvimento saudável, produtivo e de alta qualidade.

## Padrão para commits:

- Formato: **tipo: mensagem**

Exemplo: `feat: added intl lib`

- Componentes:
  - Tipo: indica se a mudança é uma nova funcionalidade (feat), correção de bug (fix), entre outros.
  - Mensagem: uma breve descrição do que o commit aborda ou resolve.

### Tipos de commit

- `feat`: nova feature, nova funcionalidade.
- `fix`: correção de um bug, correção de alguma funcionalidade já existente.
- `refactor`: quando um código precisa ser reescrito para melhorar perfomance ou entendimento do código.
- `docs`: usado para adicionar ou atualizar alguma documentação.
- `chore`: usado para desenvolvimento de um teste, atualização de pacotes, limpando código não utilizados, comentários, @TODOs.

## Padrão de nome para branches:

- Formato: **categoria/identificador-tarefa/descricao-concisa**

Exemplo: `feat/PDV-123/login-screen`

- Componentes:
  - Categoria: indica se a mudança é uma nova funcionalidade (feat), correção de bug (fix), entre outros.
  - Identificador da tarefa no Jira: referência direta à tarefa relacionada no Jira.
  - Descrição concisa: uma breve descrição do que a branch aborda ou resolve em **kebab-case**.

> [!IMPORTANT]
> Para nomeclatura de branches devemos usar o [kebab-case](https://developer.mozilla.org/en-US/docs/Glossary/Kebab_case).

### Categorias para tipo branchs

- `feat`: nova feature, nova funcionalidade.
- `fix`: correção de um bug, correção de alguma funcionalidade já existente.
- `refactor`: quando um código precisa ser reescrito para melhorar perfomance ou entendimento do código.
- `docs`: usado para adicionar ou atualizar alguma documentação.
- `chore`: usado para desenvolvimento de um teste, atualização de pacotes, limpando código não utilizados, comentários, @TODOs.
- `hotfix`: usado para pequenas correções emergenciais que precisam ir para produção logo.

## Pull Requests

#### Idioma

Todas as informações, descrições e comentários relacionados ao PR devem estar em português, garantindo que toda a equipe possa compreender e participar do processo de revisão.

> [!IMPORTANT]
> Exceto o título do PR e nome da branch que devem estar em inglês.

#### Título do PR

O título do Pull Request é crucial para oferecer uma visão rápida do objetivo das alterações. Adote o seguinte padrão para os títulos dos PRs:

- **Número da tarefa no Jira:** colocado entre colchetes no início do título.
- **Descrição concisa:** breve descrição do que a alteração envolve ou resolve.

Exemplos:

- `[PDV-2134] Added home screen`
- `[PDV-2016] Fixed logout flow`

#### Quantidade de arquivos e tamanho do PR

Manter os PRs curtos e focados é crucial para um processo de revisão eficaz e de alta qualidade.

- **Pequeno e focado:** cada PR deve representar uma única tarefa ou um conjunto muito pequeno de tarefas relacionadas.
- **Limite de arquivos:** evite incluir um grande número de arquivos alterados em um único PR. Geralmente até 10 arquivos alterados podemos considerar como um PR pequeno.

#### Consequências para PRs grandes

- **Reprovação automática:** PRs que excedem um limite estabelecido de quantidade de arquivos alterados serão automaticamente reprovados.
- **Responsabilidade do autor:** cabe ao desenvolvedor garantir que as mudanças sejam divididas de maneira lógica e revisáveis.

### Template do PR

O preenchimento completo e correto deste template é obrigatório:

```markdown
### 💙 Link da tarefa no Jira <!-- PR sem tarefa não será aceito -->

[PDV-?](https://pdv.atlassian.net/browse/PDV-?)

### 🚀 Descrição <!-- PR sem descrição não será aceito, diga o que foi feito brevemente -->

-

### Reviewer

A designação de um revisor é crítica. Responsabilidades incluem:

- **Análise técnica:** avaliar as alterações do ponto de vista técnico e funcional.
- **Feedback de código:** identificar áreas de melhoria, inconsistências ou possíveis erros.
- **Verificação de padrões:** assegurar que o código está em conformidade com as práticas adotadas pelo projeto.
- **Decisão:** aprovar o PR ou solicitar alterações específicas.

### Assignee

A atribuição de uma assinatura estabelece claramente quem possui a responsabilidade de levar adiante as mudanças sugeridas.

### Labels

A utilização de labels ajuda na categorização e identificação rápida do tipo de alteração proposta:

- `bug`: correção de um bug.
- `documentation`: documentação criada ou ajustada.
- `enhancement`: adicionada nova feature.
- `breaking change`: quando tem alteração incompatíveis.
- `⚠️ emergency`: quando tem alteração emergencial.
