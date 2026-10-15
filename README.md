# NexoDesk

**Plataforma inteligente de atendimento e gestão de solicitações para PMEs.**

O NexoDesk centraliza tickets, responsáveis, conversas e SLAs em uma operação
multiempresa simples de adotar. O produto está sendo desenvolvido por
Spec-Driven Development: especificação, critérios verificáveis e decisões
arquiteturais precedem a implementação.

## Estado atual

O projeto está na fase de fundação:

- PRD do MVP v1.0 elaborado;
- contexto e domínio em modelagem;
- arquitetura em ADRs propostos;
- monorepo e quality gates iniciais configurados;
- código de produto ainda não iniciado.

## Fonte de verdade

| Artefato               | Local                                                      | Status               |
| ---------------------- | ---------------------------------------------------------- | -------------------- |
| PRD do MVP             | [docs/product/prd-mvp-v1.md](docs/product/prd-mvp-v1.md)   | Draft para aprovação |
| Mapa de contextos      | [docs/domain/context-map.md](docs/domain/context-map.md)   | Draft                |
| Modelo de domínio      | [docs/domain/domain-model.md](docs/domain/domain-model.md) | Draft                |
| Decisões arquiteturais | [docs/architecture/adrs](docs/architecture/adrs)           | Proposed             |

## Stack-alvo

- Frontend: Angular e TypeScript
- Backend: Java e Spring Boot
- Dados: PostgreSQL
- Frontend cloud: Cloudflare Pages
- API cloud: container com escala a zero
- Processo: SDD, testes automatizados, OpenAPI e CI/CD

Versões e provedores somente serão fixados nos ADRs aprovados.

## Desenvolvimento

O repositório usa GitHub Flow, Conventional Commits e validações automatizadas
no GitHub Actions. Consulte o [guia de contribuição](CONTRIBUTING.md) e o
[processo de desenvolvimento](docs/engineering/development-process.md) antes de
iniciar uma mudança.

Validação local da fundação atual:

```bash
npm ci
npm run check
```

## Fluxo SDD

1. Aprovar problema, escopo e critérios no PRD.
2. Modelar domínio, limites e eventos.
3. Aprovar ADRs e threat model.
4. Derivar OpenAPI e modelo de dados.
5. Criar testes de aceitação rastreáveis.
6. Implementar uma entrega vertical por vez.
7. Validar em preview antes de promover para produção.

Nenhum agente deve implementar comportamento sem requisito identificado ou
inventar regra para resolver ambiguidade.

## Convenção de status

- **Draft:** em elaboração e sujeito a mudanças.
- **Proposed:** decisão recomendada aguardando aprovação.
- **Accepted:** aprovado como fonte de verdade.
- **Superseded:** substituído por decisão posterior.

## Próxima entrega

A próxima etapa, após revisão destes documentos, é produzir o threat model, o
contrato OpenAPI inicial e o backlog do Slice 0.
