# ADR-0002 — Multi-tenancy em schema compartilhado

## Status

Proposed

## Contexto

O isolamento entre organizações é requisito crítico. O MVP precisa manter baixo
custo, permitir onboarding automático e operar em PostgreSQL gerenciado.

As opções principais são banco por tenant, schema por tenant ou linhas
compartilhadas com OrganizationId. As duas primeiras aumentam provisionamento,
migrações, conexões e custo antes de existir escala que justifique o isolamento
físico.

## Decisão proposta

Usar um banco e schema compartilhados com isolamento por linha e defesa em
profundidade:

1. toda tabela de negócio possui organization_id não nulo;
2. IDs técnicos são globais, mas uniques de negócio incluem organization_id;
3. foreign keys entre entidades de tenant incluem organization_id;
4. ActorContext resolve o tenant da identidade autenticada;
5. casos de uso e repositories exigem TenantId explicitamente;
6. PostgreSQL Row-Level Security protege tabelas de tenant;
7. a API configura o tenant com SET LOCAL dentro de cada transação;
8. testes negativos usam dois tenants e tentam leitura e escrita cruzadas.

Tabelas globais mínimas, como referência de identidade externa, não recebem
organization_id. Membership e PortalAccess continuam protegidos por tenant.

## Papéis de banco

- migration_role: usado somente no deploy para migrations;
- application_role: sujeito a RLS e sem privilégio de bypass;
- system_job_role: restrito a jobs documentados, com queries tenant-aware;
- readonly_ops_role: acesso operacional controlado e auditado.

Nenhum papel de runtime usa credencial de owner do banco.

## Contexto transacional

O filtro de tenant deve ser configurado com SET LOCAL, nunca SET de sessão, para
não vazar entre conexões do pool. Operações sem transação explícita em tabelas
protegidas são proibidas por teste e revisão.

Jobs globais enumeram tenants autorizados e processam um tenant por transação.
Eventos e filas carregam OrganizationId, mas consumidores validam o contexto
antes de acessar dados.

## Alternativas consideradas

### Banco por organização

Melhor isolamento físico, porém custo e operação desproporcionais para o piloto.
Permanece opção futura para plano enterprise.

### Schema por organização

Facilita alguma separação, mas complica migrations e pools sem oferecer o mesmo
isolamento de bancos dedicados.

### Filtro somente na aplicação

Rejeitado por depender de todos os desenvolvedores e queries acertarem sempre.
RLS adiciona barreira contra falhas acidentais.

## Consequências positivas

- baixo custo e onboarding rápido;
- migrations únicas;
- consultas agregadas operacionais mais simples;
- defesa em profundidade com RLS e chaves compostas;
- caminho claro para particionamento futuro.

## Consequências negativas

- erro de configuração do contexto transacional pode negar acesso ou vazar
  dados se o papel tiver privilégios excessivos;
- RLS aumenta complexidade de testes, migrations e troubleshooting;
- exportação ou restauração de um tenant exige ferramentas específicas;
- noisy neighbor continua possível.

## Controles obrigatórios

- teste automatizado de RLS no CI;
- teste end-to-end com dois tenants;
- query review para jobs globais;
- logs com tenant pseudonimizado;
- backup e restore ensaiados;
- procedimento de exportação e anonimização por tenant;
- alerta para query sem contexto em tabela protegida.

## Gatilhos para revisão

- cliente exige isolamento físico;
- volume de um tenant afeta outros;
- restauração seletiva torna-se frequente;
- RLS não é suportada corretamente pelo pool ou provedor escolhido;
- requisito regional exige residência separada.

## Validação antes de Accepted

- prova com pool real e SET LOCAL;
- teste de concorrência entre tenants;
- validar suporte do provedor PostgreSQL a RLS, backup e conexão segura;
- revisar migrations e privilégios com threat model.
