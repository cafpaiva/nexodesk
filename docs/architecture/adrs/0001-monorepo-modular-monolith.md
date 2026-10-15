# ADR-0001 — Monorepo e monólito modular

## Status

Proposed

## Contexto

O NexoDesk precisa entregar um MVP com frontend Angular, API Spring Boot,
processamento assíncrono e documentação SDD. A equipe inicial é pequena e o
produto ainda não possui evidência de escala ou domínios que precisem de deploy
independente.

Microserviços antecipariam problemas de rede, observabilidade, consistência,
contratos e operação sem validar o produto. Um monólito sem limites, por outro
lado, permitiria acoplamento entre identidade, tickets, SLA e integrações.

## Decisão proposta

Usar um monorepo e implantar o backend como monólito modular.

Estrutura inicial:

```text
nexodesk/
  apps/
    api/
    web/
  docs/
    product/
    domain/
    architecture/
    api/
  infra/
  tooling/
```

O backend será organizado por contexto de negócio, não por camada técnica
global:

```text
io.nexodesk
  identity
  organization
  customer
  ticketing
  sla
  notifications
  audit
  analytics
  ai
  platform
```

Cada módulo terá:

- domain: agregados, value objects, eventos e portas;
- application: casos de uso e políticas de orquestração;
- adapter.in: REST, jobs e consumidores;
- adapter.out: persistência e provedores externos;
- package-info com dependências permitidas.

Módulos comunicam-se por portas explícitas ou eventos internos. Notificações,
analytics e IA usam outbox e consistência eventual. O banco e o deploy são
compartilhados no MVP.

## Fitness functions

- ArchUnit impede dependência de domain para Spring, JPA ou SDK externo.
- ArchUnit impede acesso direto ao adapter de outro módulo.
- Ciclos entre módulos falham no CI.
- APIs públicas de módulo são menores que suas implementações internas.
- Eventos possuem schemaVersion e testes de compatibilidade.

## Alternativas consideradas

### Microserviços desde o início

Rejeitada no MVP por elevar custo operacional e exigir contratos distribuídos
antes de validar volume e limites reais.

### Monólito tradicional por controllers, services e repositories

Rejeitada por não proteger os contextos nem demonstrar as decisões de domínio.

### Repositórios separados para web, API e documentação

Adiada. Aumentaria coordenação de versões e dificultaria mudanças verticais
atômicas durante a fase SDD.

## Consequências positivas

- uma mudança vertical pode atualizar spec, API, web e testes no mesmo PR;
- ambiente local e CI mais simples;
- transações locais cobrem regras críticas;
- custo de infraestrutura menor;
- limites preparados para extração futura quando houver evidência.

## Consequências negativas

- build completo pode crescer;
- disciplina de módulos depende de fitness functions;
- um deploy atualiza todo o backend;
- falha de processo afeta todos os módulos do backend.

## Gatilhos para revisão

- módulo exige escala ou disponibilidade independente;
- equipes autônomas possuem cadências incompatíveis;
- deploy compartilhado torna-se risco recorrente;
- requisito regulatório exige isolamento físico;
- tempos de build e teste ultrapassam o orçamento acordado.

## Validação antes de Accepted

- executar prova de conceito com dois módulos e ArchUnit;
- confirmar estrutura de build Java e Angular;
- validar pipeline incremental do monorepo;
- aprovar ownership e contratos do mapa de contextos.
