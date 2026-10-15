# Contribuindo com o NexoDesk

O NexoDesk usa Spec-Driven Development e GitHub Flow. Toda mudança de
comportamento começa em uma especificação ou requisito identificável e chega à
`main` por pull request validado pelo CI.

## Antes de desenvolver

1. Confirme o requisito, os critérios de aceite e as decisões arquiteturais
   afetadas.
2. Abra ou associe uma issue. Ambiguidades de produto não devem ser resolvidas
   silenciosamente no código.
3. Crie uma branch curta a partir da `main` atualizada:
   `feat/<descricao>`, `fix/<descricao>`, `docs/<descricao>` ou
   `chore/<descricao>`.

## Commits

Todos os novos commits seguem
[Conventional Commits](https://www.conventionalcommits.org/):

```text
feat(ticketing): allow attendants to assign a ticket
fix(sla): pause response timer while waiting for customer
docs(architecture): accept multitenancy decision
ci: add pull request quality checks
```

Use `!` e um rodapé `BREAKING CHANGE:` quando houver incompatibilidade. Não
reescrevemos os dois commits históricos que antecedem esta convenção.

## Validação local

Instale as ferramentas uma vez e execute a mesma verificação estrutural do CI:

```bash
npm ci
npm run check
```

Para validar uma faixa de commits:

```bash
npm run lint:commits -- --from origin/main --to HEAD --verbose
```

Os comandos específicos de Angular e Spring Boot serão adicionados quando os
respectivos aplicativos forem inicializados.

## Pull requests

- mantenha a mudança pequena e vertical;
- vincule requisito ou issue e registre decisões relevantes;
- inclua ou atualize testes para cada critério de aceite aplicável;
- não inclua segredos, dados pessoais ou credenciais de teste reais;
- espere todos os checks obrigatórios antes do merge;
- prefira **Squash and merge**, preservando um título convencional;
- remova a branch após o merge.

O fluxo completo, a política de releases e as proteções esperadas estão em
[docs/engineering/development-process.md](docs/engineering/development-process.md).
