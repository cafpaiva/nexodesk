# NexoDesk — PRD do MVP v1.0

## Controle do documento

| Campo   | Valor                                                          |
| ------- | -------------------------------------------------------------- |
| Produto | NexoDesk                                                       |
| Título  | Plataforma inteligente de atendimento e gestão de solicitações |
| Versão  | 1.0                                                            |
| Status  | Draft executável para revisão                                  |
| Data    | 15 de outubro de 2026                                          |
| Origem  | PRD de visão fornecido pelo fundador                           |
| Público | Produto, engenharia, design, QA e agentes de IA                |

## 1. Propósito deste documento

Este documento converte a visão ampla do NexoDesk em um primeiro produto
entregável, testável e validável com clientes reais. Ele é a fonte de verdade
do escopo do MVP.

Os termos abaixo são normativos:

- **DEVE** indica requisito obrigatório do MVP.
- **DEVERIA** indica requisito importante, mas adiável sem impedir o piloto.
- **PODE** indica oportunidade posterior.
- **NÃO FAZ PARTE** impede implementação no MVP sem alteração aprovada deste
  documento.

Todo requisito funcional possui um identificador estável. Código, testes,
contratos de API e tarefas devem referenciar esses identificadores. Agentes de
IA não devem inventar comportamento quando houver ambiguidade: devem registrar
a dúvida como decisão pendente.

## 2. Resumo executivo

O NexoDesk é um SaaS B2B para pequenas e médias empresas que hoje controlam
solicitações em planilhas, caixas de e-mail e conversas dispersas. O MVP
centraliza abertura, atribuição, acompanhamento e resolução de tickets em uma
operação multiempresa, com portal para clientes, SLAs simples, histórico
auditável e assistência opcional de IA.

O produto não tenta substituir plataformas enterprise no primeiro lançamento.
Seu objetivo é permitir que uma empresa com 3 a 50 colaboradores abandone o
controle manual, configure sua operação em minutos e acompanhe o que precisa
ser respondido, por quem e até quando.

### Proposta de valor

**Solicitações organizadas. Equipes em movimento.**

Para PMEs que perdem contexto e prazos em canais dispersos, o NexoDesk oferece
uma central simples de atendimento que cria responsabilidade, preserva o
histórico e transforma a operação em dados acionáveis.

## 3. Problema e hipótese

### 3.1 Problema

As empresas-alvo apresentam pelo menos três sintomas:

1. solicitações se perdem ou são respondidas mais de uma vez;
2. gestores não sabem o volume, a carga da equipe nem os prazos em risco;
3. o histórico fica vinculado a pessoas e canais, não ao relacionamento com o
   cliente.

### 3.2 Hipótese de produto

Se uma PME conseguir cadastrar sua equipe, abrir o primeiro ticket e acompanhar
o prazo em menos de 10 minutos, então ela perceberá valor suficiente para
substituir controles manuais e usar o NexoDesk semanalmente.

### 3.3 Hipóteses que o MVP deve validar

- equipes aceitam começar pelo portal web antes de integrações multicanal;
- um fluxo padronizado de cinco estados atende à maioria dos pilotos;
- SLAs em horas corridas são suficientes para a primeira validação;
- resumo, categoria e prioridade sugeridos por IA reduzem trabalho sem remover
  o controle humano;
- gestores valorizam visibilidade operacional antes de relatórios avançados.

## 4. Objetivos e métricas

### 4.1 Objetivos do MVP

- Permitir onboarding autônomo de uma organização.
- Centralizar o ciclo completo de um ticket.
- Dar visibilidade de responsável, prioridade, estado e prazo.
- Permitir colaboração entre equipe e cliente com histórico auditável.
- Validar uso recorrente com empresas-piloto.
- Demonstrar uma arquitetura segura, multi-tenant e de baixo custo operacional.

### 4.2 Métricas de sucesso do piloto

| Métrica                   | Definição                                                 | Meta inicial  |
| ------------------------- | --------------------------------------------------------- | ------------- |
| Ativação                  | Organização que cria equipe e primeiro ticket em 24 horas | >= 60%        |
| Tempo para primeiro valor | Do cadastro ao primeiro ticket criado                     | <= 10 minutos |
| Adoção semanal            | Organizações ativadas com atividade na semana             | >= 50%        |
| Conclusão                 | Tickets resolvidos ou fechados sobre tickets criados      | >= 70%        |
| Cumprimento de SLA        | Tickets resolvidos dentro do SLA                          | >= 80%        |
| Retenção de piloto        | Organizações ativas após 30 dias                          | >= 40%        |
| Satisfação                | Média do CSAT após resolução                              | >= 4 de 5     |
| Aceite da IA              | Sugestões aceitas, com ou sem edição                      | >= 40%        |

As metas são hipóteses de validação, não garantias comerciais. Devem ser
reavaliadas depois dos primeiros três pilotos.

### 4.3 Não objetivos

- competir em paridade funcional com ferramentas enterprise;
- suportar todos os canais no primeiro lançamento;
- permitir workflows arbitrários ou permissões totalmente customizáveis;
- automatizar decisões críticas sem confirmação humana;
- oferecer aplicativo móvel nativo;
- implementar cobrança antes de validar uso e disposição a pagar.

## 5. Público e perfis do MVP

### 5.1 Administrador da organização

Responsável por criar a organização, convidar a equipe, definir categorias,
prioridades e SLAs e acompanhar indicadores. No MVP, absorve as funções de
gerente e coordenador.

### 5.2 Atendente

Responsável por receber, assumir, responder, movimentar e resolver tickets.
Pode registrar notas internas e consultar o histórico da organização.

### 5.3 Cliente

Pessoa atendida pela organização. Pode abrir e acompanhar seus próprios
tickets, responder interações, confirmar resolução, reabrir dentro do prazo e
avaliar o atendimento.

### 5.4 Perfis adiados

Gerente, Coordenador, Agente Sênior, Auditor e Visualizador serão introduzidos
somente após evidência de necessidade. O modelo de autorização deve permitir
essa evolução sem codificar permissões diretamente na interface.

## 6. Escopo MoSCoW

### 6.1 Must — obrigatório para liberar o piloto

| Épico     | Entrega                                                |
| --------- | ------------------------------------------------------ |
| EP-ORG    | Cadastro e isolamento de organizações                  |
| EP-IAM    | Autenticação, convite e RBAC com três perfis           |
| EP-CUS    | Cadastro mínimo de clientes                            |
| EP-TKT    | Criação, consulta, atribuição e ciclo de tickets       |
| EP-INT    | Respostas públicas, notas internas e histórico         |
| EP-SLA    | SLA de primeira resposta e resolução em horas corridas |
| EP-PORTAL | Portal web do cliente                                  |
| EP-DASH   | Dashboard operacional essencial                        |
| EP-CSAT   | Avaliação simples após resolução                       |
| EP-NOTIF  | Notificações transacionais por e-mail                  |
| EP-AUD    | Auditoria das ações críticas                           |
| EP-AI     | Sugestões opcionais de categoria, prioridade e resumo  |
| EP-OPS    | Logs, métricas, backup e deploy automatizado           |

### 6.2 Should — importante, mas não bloqueia o primeiro piloto

- anexos com limite e tipos seguros;
- exportação CSV da lista de tickets;
- respostas rápidas configuradas pelo administrador;
- busca textual por número, título, cliente e conteúdo;
- webhook de saída para eventos de ticket.

### 6.3 Could — oportunidade após validação

- kanban com arrastar e soltar;
- base de conhecimento;
- campos customizados;
- regras simples de atribuição automática;
- relatórios agendados;
- identidade visual por organização;
- mais idiomas.

### 6.4 Won't — fora do MVP

- WhatsApp Business API;
- captura de e-mail por IMAP;
- chat incorporável e notificações push;
- SSO corporativo e 2FA obrigatório;
- billing, planos e cobrança;
- workflows personalizados;
- calendários de horário comercial, férias e feriados;
- relatórios PDF ou Excel e dashboards arrastáveis;
- aplicativo móvel nativo;
- exclusão física de eventos de auditoria;
- respostas enviadas automaticamente por IA;
- múltiplas regiões ou bancos dedicados por cliente.

Itens Won't não podem ser implementados por conveniência técnica ou sugestão de
IA sem mudança explícita de escopo.

## 7. Premissas e restrições

- O produto será inicialmente oferecido em português do Brasil.
- Cada usuário interno pertence a uma organização no MVP.
- Um cliente pode ter tickets em apenas uma organização por identidade local.
- O frontend será Angular e TypeScript.
- A API será Java com Spring Boot e PostgreSQL.
- O frontend poderá ser publicado no Cloudflare Pages.
- A API será empacotada em container e poderá executar no Google Cloud Run.
- Arquivos, quando habilitados, poderão usar Cloudflare R2.
- E-mails transacionais usarão um provedor com API e plano de entrada.
- A infraestrutura deve permanecer próxima de zero para pilotos de baixo
  volume, respeitando os limites vigentes dos fornecedores.
- O nome NexoDesk é provisório até validação de domínio e marca.

## 8. Modelo de domínio

### 8.1 Entidades principais

| Entidade           | Responsabilidade                                        |
| ------------------ | ------------------------------------------------------- |
| Organization       | Limite de tenant, configurações e propriedade dos dados |
| User               | Identidade autenticável global                          |
| Membership         | Vínculo do usuário com organização, papel e estado      |
| Customer           | Pessoa atendida dentro de uma organização               |
| PortalAccess       | Vínculo autenticado entre User, Customer e Organization |
| Category           | Classificação configurável de tickets                   |
| SlaPolicy          | Metas por prioridade para primeira resposta e resolução |
| Ticket             | Solicitação e estado operacional                        |
| Interaction        | Resposta pública ou nota interna vinculada ao ticket    |
| SlaCycle           | Medição imutável de um ciclo de resolução               |
| SatisfactionSurvey | Avaliação opcional após resolução                       |
| AiSuggestion       | Sugestão, modelo, confiança e decisão humana            |
| Notification       | Registro de entrega transacional                        |
| AuditEvent         | Registro append-only de ação relevante                  |

### 8.2 Invariantes multi-tenant

- Toda entidade de negócio DEVE possuir OrganizationId.
- Toda consulta DEVE aplicar o tenant obtido da identidade autenticada.
- O cliente não pode fornecer um OrganizationId confiável para autorização.
- Relacionamentos entre tenants diferentes DEVEM ser rejeitados.
- Chaves e índices únicos de negócio DEVEM incluir OrganizationId.
- Testes automatizados DEVEM provar que usuários de uma organização não leem,
  alteram ou inferem dados de outra.

### 8.3 Ticket

Um ticket possui obrigatoriamente:

- identificador técnico imutável;
- número sequencial único dentro da organização;
- título entre 5 e 160 caracteres;
- descrição entre 10 e 10.000 caracteres;
- cliente;
- categoria;
- prioridade;
- estado;
- origem;
- autor;
- datas de criação e atualização;
- política e prazos de SLA calculados;
- responsável opcional;
- versão para controle de concorrência.

Prioridades do MVP: LOW, MEDIUM, HIGH e CRITICAL.

Origens do MVP: CUSTOMER_PORTAL e INTERNAL.

Cada organização possui um slug público único usado na URL do portal. Um
Customer pode ter no máximo um PortalAccess ativo por organização, sempre
vinculado a um e-mail verificado.

### 8.4 Estados e transições

| Estado atual     | Próximos estados permitidos | Observação                         |
| ---------------- | --------------------------- | ---------------------------------- |
| OPEN             | IN_PROGRESS, RESOLVED       | Ticket novo ou reaberto            |
| IN_PROGRESS      | WAITING_CUSTOMER, RESOLVED  | Existe trabalho ativo              |
| WAITING_CUSTOMER | IN_PROGRESS, RESOLVED       | Relógio de resolução pausado       |
| RESOLVED         | OPEN, CLOSED                | Cliente pode reabrir em até 7 dias |
| CLOSED           | nenhum                      | Estado terminal no MVP             |

Regras:

- Atribuir um ticket OPEN não altera automaticamente seu estado.
- A primeira resposta pública de um atendente move OPEN para IN_PROGRESS.
- Uma resposta do cliente em WAITING_CUSTOMER move o ticket para IN_PROGRESS.
- Resolver exige uma interação pública de resolução.
- Tickets RESOLVED são fechados automaticamente após 7 dias sem reabertura.
- Reabrir cria um novo SlaCycle de resolução e mantém todo o histórico anterior.
- CLOSED não pode ser reaberto no MVP; deve ser criado um novo ticket vinculado
  manualmente pelo contexto.

### 8.5 SLA

O MVP mede horas corridas, 24 horas por dia e 7 dias por semana.

| Prioridade | Primeira resposta | Resolução |
| ---------- | ----------------: | --------: |
| LOW        |          24 horas | 120 horas |
| MEDIUM     |           8 horas |  72 horas |
| HIGH       |           4 horas |  24 horas |
| CRITICAL   |            1 hora |   8 horas |

Regras:

- O relógio de primeira resposta inicia na criação e encerra na primeira
  interação pública de um atendente.
- O relógio de resolução inicia na criação.
- O relógio de resolução pausa em WAITING_CUSTOMER e retoma em IN_PROGRESS.
- RESOLVED e CLOSED encerram o ciclo atual.
- Alterar prioridade recalcula prazos futuros a partir da criação, preservando
  no histórico os valores anteriores.
- O sistema classifica um prazo como at risk ao consumir 80% do tempo.
- Datas são persistidas em UTC e exibidas no fuso da organização.

### 8.6 Fórmulas operacionais

- **FRT:** média entre criação e primeira resposta pública de atendente para
  tickets criados no período e que já receberam resposta.
- **MTTR:** média de tempo ativo dos ciclos encerrados por RESOLVED no período;
  intervalos em WAITING_CUSTOMER são excluídos.
- **Cumprimento de SLA:** ciclos encerrados dentro da meta divididos por todos
  os ciclos encerrados no período.
- **Taxa de reabertura:** tickets reabertos divididos por tickets resolvidos no
  período.
- **CSAT:** média das avaliações enviadas no período; itens sem resposta não
  entram no denominador.

Todas as consultas usam o fuso da organização para delimitar o período e UTC
para calcular durações.

## 9. Matriz de permissões

| Ação                                | Admin | Atendente |      Cliente      |
| ----------------------------------- | :---: | :-------: | :---------------: |
| Gerenciar organização e SLAs        |  Sim  |    Não    |        Não        |
| Convidar ou desativar equipe        |  Sim  |    Não    |        Não        |
| Cadastrar cliente                   |  Sim  |    Sim    |        Não        |
| Ver todos os tickets da organização |  Sim  |    Sim    |        Não        |
| Ver próprios tickets                |  Sim  |    Sim    |        Sim        |
| Criar ticket interno                |  Sim  |    Sim    |        Não        |
| Criar ticket no portal              |  Não  |    Não    |        Sim        |
| Atribuir ou reatribuir              |  Sim  |    Sim    |        Não        |
| Responder publicamente              |  Sim  |    Sim    | Sim, nos próprios |
| Criar nota interna                  |  Sim  |    Sim    |        Não        |
| Alterar prioridade e categoria      |  Sim  |    Sim    |        Não        |
| Resolver ticket                     |  Sim  |    Sim    |        Não        |
| Reabrir ticket resolvido            |  Sim  |    Sim    | Sim, nos próprios |
| Ver dashboard operacional           |  Sim  |    Sim    |        Não        |
| Ver auditoria                       |  Sim  |    Não    |        Não        |
| Aceitar sugestão de IA              |  Sim  |    Sim    |        Não        |

## 10. Jornadas essenciais

### 10.1 Ativação da organização

1. O administrador cria sua conta e verifica o e-mail.
2. Informa nome da organização e fuso horário.
3. O sistema cria categorias e SLAs padrão.
4. O administrador convida pelo menos um atendente.
5. O sistema conduz o administrador à criação do primeiro cliente ou ticket.

### 10.2 Atendimento

1. Um cliente abre ticket no portal ou um atendente registra uma demanda.
2. O sistema calcula SLA e, quando habilitado, solicita sugestões à IA.
3. Um atendente assume o ticket, confirma ou altera categoria e prioridade.
4. O atendente responde, solicita informação ou resolve.
5. O cliente acompanha, responde, confirma ou reabre.
6. O sistema fecha automaticamente e consolida os indicadores.

### 10.3 Supervisão

1. O administrador acessa o dashboard.
2. Visualiza abertos, não atribuídos, em risco e vencidos.
3. Filtra tickets e redistribui os que precisam de atenção.
4. Consulta auditoria quando uma ação precisa ser explicada.

## 11. Requisitos funcionais e critérios de aceitação

### FR-ORG-001 — Criar organização

**Prioridade:** Must

O primeiro usuário verificado DEVE criar uma organização com nome e fuso
horário e tornar-se ADMIN.

**Aceitação:**

- Dado um e-mail verificado sem organização, quando o usuário informar dados
  válidos, então a organização e sua associação ADMIN são criadas atomicamente.
- Dado nome vazio ou fuso inválido, quando enviar o formulário, então nenhum
  registro é criado e os campos inválidos são informados.
- Dada falha parcial, então a transação é revertida e pode ser repetida sem
  duplicidade.

### FR-ORG-002 — Configuração inicial

**Prioridade:** Must

Ao criar uma organização, o sistema DEVE provisionar categorias gerais e as
quatro políticas de SLA padrão.

**Aceitação:**

- Dada uma nova organização, quando o onboarding terminar, então existe ao
  menos uma categoria ativa e uma política para cada prioridade.
- Dada uma repetição idempotente do provisionamento, então não há duplicatas.

### FR-AUTH-001 — Autenticar usuário

**Prioridade:** Must

O sistema DEVE autenticar por e-mail verificado e senha segura, emitindo sessão
de curta duração e renovação revogável.

**Aceitação:**

- Dadas credenciais válidas e usuário ativo, quando autenticar, então recebe
  sessão válida e a tentativa é auditada.
- Dadas credenciais inválidas, então a resposta não revela qual campo falhou.
- Dado usuário desativado, então novas sessões são negadas e sessões existentes
  deixam de ser aceitas.
- Após tentativas repetidas, o endpoint aplica limitação progressiva.

### FR-AUTH-002 — Recuperar acesso

**Prioridade:** Must

O usuário DEVE solicitar redefinição de senha por token único e expirável.

**Aceitação:**

- Dado qualquer e-mail, a resposta pública é indistinguível.
- Dado token válido e não utilizado, uma nova senha revoga sessões anteriores.
- Token expirado, reutilizado ou adulterado é rejeitado sem alterar a senha.

### FR-USR-001 — Convidar integrante

**Prioridade:** Must

O ADMIN DEVE convidar um ATENDENTE por e-mail.

**Aceitação:**

- Dado ADMIN autenticado, quando convidar e-mail ainda não associado, então um
  convite único com validade de 72 horas é enviado.
- Dado convite válido, quando aceito, então a associação ativa é criada com o
  papel definido.
- Convites expirados, cancelados ou já usados são rejeitados.
- Um usuário de outro tenant não pode consultar ou aceitar o convite sem o
  token correspondente.

### FR-USR-002 — Desativar integrante

**Prioridade:** Must

O ADMIN DEVE desativar integrantes sem apagar autoria ou histórico.

**Aceitação:**

- Ao desativar um atendente, novas sessões são recusadas.
- Tickets atribuídos permanecem com autoria histórica e são marcados para
  redistribuição.
- O último ADMIN ativo da organização não pode ser desativado.

### FR-CUS-001 — Gerenciar cliente

**Prioridade:** Must

ADMIN e ATENDENTE DEVEM criar, consultar e atualizar clientes com nome e e-mail.

**Aceitação:**

- E-mail do cliente é único dentro da organização, ignorando maiúsculas.
- Cliente de uma organização nunca aparece em consultas de outra.
- Atualização registra ator, instante e campos alterados na auditoria.
- Cliente com histórico não pode ser excluído fisicamente; pode ser inativado.

### FR-CAT-001 — Gerenciar categorias

**Prioridade:** Must

O ADMIN DEVE criar, renomear e desativar categorias da organização.

**Aceitação:**

- Nome de categoria é único dentro do tenant, ignorando maiúsculas.
- Categoria usada por ticket não pode ser excluída fisicamente.
- Categoria desativada permanece nos tickets existentes, mas não pode ser
  selecionada em novos tickets.
- Toda alteração registra ator, instante, valor anterior e valor novo.

### FR-TKT-001 — Criar ticket interno

**Prioridade:** Must

ADMIN e ATENDENTE DEVEM criar ticket em nome de um cliente.

**Aceitação:**

- Com título, descrição, cliente e categoria válidos, o ticket é criado OPEN,
  recebe número sequencial e SLA.
- Se prioridade for omitida, MEDIUM é aplicada.
- O evento de criação e os prazos calculados aparecem no histórico.
- Repetição com a mesma chave de idempotência não cria outro ticket.

### FR-TKT-002 — Criar ticket pelo portal

**Prioridade:** Must

CLIENTE autenticado DEVE criar ticket somente para si.

**Aceitação:**

- O cliente não consegue escolher outro CustomerId.
- O ticket nasce com origem CUSTOMER_PORTAL, estado OPEN e sem responsável.
- O cliente recebe confirmação com número e link para acompanhamento.
- Campos internos, notas e dados de outros clientes nunca aparecem na resposta.

### FR-TKT-003 — Listar e filtrar tickets

**Prioridade:** Must

Usuários internos DEVEM listar tickets do tenant com paginação, ordenação e
filtros por estado, prioridade, categoria, responsável, cliente e situação de
SLA.

**Aceitação:**

- A listagem é paginada no servidor e usa ordenação determinística.
- Filtros podem ser combinados e preservados na URL do frontend.
- Consultas nunca retornam itens de outro tenant.
- CLIENTE recebe apenas os próprios tickets, independentemente dos parâmetros.

### FR-TKT-004 — Consultar ticket

**Prioridade:** Must

Usuários autorizados DEVEM consultar dados, SLA e timeline ordenada do ticket.

**Aceitação:**

- A timeline ordena eventos pelo instante e desempata por identificador.
- CLIENTE não visualiza notas internas, auditoria ou dados internos.
- Identificador inexistente e identificador de outro tenant produzem resposta
  indistinguível para evitar enumeração.

### FR-TKT-005 — Atribuir ticket

**Prioridade:** Must

ADMIN e ATENDENTE DEVEM atribuir ou reatribuir ticket a integrante ativo.

**Aceitação:**

- O responsável deve ser ADMIN ou ATENDENTE ativo no mesmo tenant.
- Reatribuição concorrente usa controle otimista e rejeita versão obsoleta.
- Alteração registra responsável anterior, novo responsável, ator e instante.
- O novo responsável recebe notificação.

### FR-TKT-006 — Alterar classificação

**Prioridade:** Must

Usuários internos DEVEM alterar categoria e prioridade.

**Aceitação:**

- Categoria deve estar ativa e pertencer ao mesmo tenant.
- Alterar prioridade recalcula SLA conforme a regra da seção 8.5.
- O histórico preserva valor anterior, valor novo e prazos resultantes.
- Cliente visualiza prioridade atual, mas não justificativas internas.

### FR-TKT-007 — Alterar estado

**Prioridade:** Must

O sistema DEVE aplicar exclusivamente as transições da seção 8.4.

**Aceitação:**

- Transição inválida retorna erro de domínio sem alterar o ticket.
- Resolver sem resposta pública de resolução é rejeitado.
- Entrar e sair de WAITING_CUSTOMER pausa e retoma o relógio de resolução.
- Toda transição registra ator, origem, estado anterior, novo estado e instante.

### FR-TKT-008 — Resolver, reabrir e fechar

**Prioridade:** Must

Usuários internos DEVEM resolver; o cliente DEVE confirmar ou reabrir dentro de
7 dias; o sistema DEVE fechar tickets expirados.

**Aceitação:**

- Resolver encerra o ciclo atual e envia solicitação de confirmação ao cliente.
- Reabrir dentro de 7 dias move para OPEN e cria novo SlaCycle.
- Após 7 dias sem reabertura, um job idempotente move RESOLVED para CLOSED.
- Duas execuções do job não geram eventos ou notificações duplicadas.

### FR-INT-001 — Responder publicamente

**Prioridade:** Must

Participantes autorizados DEVEM adicionar resposta pública entre 1 e 10.000
caracteres.

**Aceitação:**

- Resposta de atendente encerra o SLA de primeira resposta quando for a primeira.
- Resposta de cliente em WAITING_CUSTOMER move o ticket para IN_PROGRESS.
- Resposta é imutável; correções são novas interações.
- O destinatário recebe notificação sem conteúdo sensível no assunto.

### FR-INT-002 — Criar nota interna

**Prioridade:** Must

ADMIN e ATENDENTE DEVEM registrar nota visível somente à equipe.

**Aceitação:**

- Notas nunca são serializadas em endpoints, e-mails ou telas do cliente.
- Nota não encerra primeira resposta nem altera estado.
- Criação registra autoria e instante e não permite edição destrutiva.

### FR-SLA-001 — Configurar metas

**Prioridade:** Must

ADMIN DEVE consultar e alterar metas de primeira resposta e resolução por
prioridade.

**Aceitação:**

- Metas devem ser inteiros positivos em horas e resolução deve ser maior ou
  igual à primeira resposta.
- Mudança afeta novos tickets; tickets existentes preservam a política
  versionada, salvo reclassificação explícita.
- Toda alteração é auditada.

### FR-SLA-002 — Sinalizar risco e violação

**Prioridade:** Must

O sistema DEVE calcular os estados ON_TRACK, AT_RISK e BREACHED para cada meta.

**Aceitação:**

- AT_RISK inicia ao atingir 80% do tempo consumível.
- BREACHED inicia ao ultrapassar o prazo sem cumprimento.
- Pausas de WAITING_CUSTOMER não consomem tempo de resolução.
- Dashboard e lista usam a mesma fonte de cálculo.

### FR-PORTAL-001 — Ativar acesso ao portal

**Prioridade:** Must

Um cliente DEVE criar ou ativar acesso a partir do portal identificado pelo
slug da organização e verificar seu e-mail.

**Aceitação:**

- Dado slug ativo e e-mail novo no tenant, a verificação cria Customer e
  PortalAccess atomicamente e permite definir a credencial inicial.
- Dado cliente existente com o mesmo e-mail, a verificação vincula a identidade
  sem duplicar Customer.
- O mesmo token não pode ser reutilizado e expira em 30 minutos.
- Slug inexistente, organização inativa e e-mail não verificado não concedem
  acesso.
- A resposta anterior à verificação não revela se o cliente já existia.

### FR-PORTAL-002 — Acompanhar próprios tickets

**Prioridade:** Must

CLIENTE DEVE listar e consultar apenas seus tickets, responder e reabrir quando
permitido.

**Aceitação:**

- A autorização é aplicada na API, não apenas na interface.
- A timeline do portal contém somente interações públicas.
- Operação proibida retorna erro seguro e é auditada quando indicar abuso.

### FR-DASH-001 — Exibir operação

**Prioridade:** Must

ADMIN e ATENDENTE DEVEM visualizar contagens de abertos, não atribuídos, em
risco e vencidos, além do FRT e MTTR do período.

**Aceitação:**

- O período padrão é de 30 dias e pode ser alterado.
- Indicadores respeitam tenant e fuso horário.
- Cada card leva à lista com o filtro correspondente.
- Fórmulas de FRT e MTTR são documentadas e testadas com dados de referência.

### FR-NOTIF-001 — Enviar e-mail transacional

**Prioridade:** Must

O sistema DEVE notificar convite, criação, atribuição, resposta, resolução,
reabertura e SLA violado.

**Aceitação:**

- Eventos usam fila ou outbox e não bloqueiam a transação principal.
- Falhas são repetidas com limite e ficam observáveis.
- Uma chave idempotente impede duplicação.
- Logs não armazenam corpo completo nem tokens.

### FR-AUD-001 — Registrar auditoria

**Prioridade:** Must

O sistema DEVE registrar login, alteração de acesso, exportação e mutações de
ticket, cliente, SLA e configuração.

**Aceitação:**

- Evento contém tenant, ator, ação, alvo, instante, resultado e metadados
  seguros.
- Aplicação não oferece endpoint de edição ou exclusão de evento.
- Apenas ADMIN consulta auditoria do próprio tenant.
- Segredos, senhas, tokens e conteúdo sensível não são registrados.

### FR-AI-001 — Sugerir classificação

**Prioridade:** Must com feature flag

Quando a IA estiver habilitada para o tenant, o sistema DEVE sugerir categoria,
prioridade e resumo para um ticket sem aplicar mudanças automaticamente.

**Aceitação:**

- Sem consentimento ou configuração válida, o fluxo manual continua funcional.
- A saída do modelo é validada contra esquema fechado.
- Categoria sugerida deve existir e estar ativa no tenant.
- ADMIN ou ATENDENTE pode aceitar, editar ou rejeitar.
- A decisão humana, confiança, modelo e versão do prompt são auditados.
- Falha, timeout ou saída inválida não impede criação ou atendimento do ticket.

### FR-AI-002 — Minimizar dados enviados

**Prioridade:** Must com feature flag

O serviço de IA DEVE receber somente título, descrição e categorias necessárias
à tarefa.

**Aceitação:**

- Tokens, notas internas, dados de autenticação e dados de outros tickets não
  entram no prompt.
- E-mail e telefone são mascarados quando não forem necessários.
- O provedor deve estar configurado para não usar dados do produto em treino.
- Requisições e custos são medidos por tenant sem armazenar prompt completo em
  logs operacionais.

### FR-CSAT-001 — Avaliar atendimento

**Prioridade:** Must

CLIENTE DEVERIA avaliar ticket resolvido uma única vez, de 1 a 5, com comentário
opcional.

**Aceitação:**

- Somente o cliente do ticket pode avaliar.
- Uma avaliação por ciclo de resolução é aceita.
- Comentário é limitado a 1.000 caracteres.
- Resultado agregado aparece no dashboard sem expor comentário a atendentes no
  MVP.

### FR-ATT-001 — Adicionar anexo

**Prioridade:** Should

Participantes DEVERIAM anexar arquivos permitidos a interações.

**Aceitação:**

- Tamanho máximo é 10 MB e tipos permitidos são PDF, PNG, JPEG e TXT.
- Upload usa URL temporária e armazenamento isolado por tenant.
- Arquivo permanece indisponível até validação de tipo e verificação de
  conteúdo; se a verificação não estiver operacional, uploads são desabilitados.
- Download exige autorização no momento do acesso.
- Arquivo rejeitado não cria interação parcial.

## 12. Requisitos não funcionais

### NFR-SEC-001 — Segurança

- Todo tráfego externo DEVE usar TLS.
- Senhas DEVEM usar algoritmo adaptativo recomendado, como Argon2id ou bcrypt.
- A aplicação DEVE seguir OWASP ASVS nível 1 e mitigar o OWASP Top 10.
- Tokens e segredos DEVEM vir de gerenciador de segredos, nunca do repositório.
- Endpoints de autenticação e portal DEVEM possuir rate limiting.
- Dependências e imagens DEVEM ser verificadas no CI quanto a vulnerabilidades
  críticas conhecidas.

### NFR-TEN-001 — Isolamento

- Toda operação de dados DEVE ter teste de isolamento multi-tenant.
- Identificadores previsíveis não podem permitir enumeração.
- Cache, arquivos, métricas e filas também DEVEM incluir o contexto do tenant.
- Um teste end-to-end negativo entre dois tenants é obrigatório antes do piloto.

### NFR-PERF-001 — Desempenho

- Leituras comuns da API DEVEM responder em p95 <= 500 ms sob 50 requisições por
  segundo, excluindo serviços externos e IA.
- Mutações comuns DEVEM responder em p95 <= 800 ms.
- Listagens DEVEM ser paginadas e não retornar mais de 100 itens por requisição.
- O frontend DEVERIA atingir LCP <= 2,5 s em conexão móvel adequada.

### NFR-REL-001 — Confiabilidade

- Disponibilidade alvo do piloto: 99,5% mensal, excluindo manutenção anunciada.
- Operações críticas DEVEM ser transacionais e idempotentes quando repetíveis.
- Banco DEVE ter backup diário com RPO <= 24 horas e RTO <= 4 horas.
- Restauração DEVE ser ensaiada antes de incorporar o primeiro cliente pagante.

### NFR-OBS-001 — Observabilidade

- Cada requisição DEVE possuir correlation ID.
- Logs DEVEM ser estruturados e excluir dados sensíveis.
- Métricas mínimas: latência, erro, tráfego, saturação, fila de e-mail, SLA jobs
  e custo de IA.
- Exceções críticas e falhas recorrentes DEVEM gerar alerta.
- Health checks devem separar liveness e readiness.

### NFR-LGPD-001 — Privacidade

- O produto DEVE documentar controlador, operador e finalidade dos dados.
- Coleta DEVE ser limitada ao necessário para atendimento.
- Exportação e anonimização por solicitação DEVEM ter procedimento operacional.
- Retenção inicial: tickets por 24 meses e auditoria por 12 meses, configurável
  posteriormente e sujeita à base legal do cliente.
- Exclusão de usuário preserva histórico por pseudonimização quando necessário.

### NFR-ACC-001 — Acessibilidade

- Fluxos essenciais DEVEM buscar conformidade WCAG 2.2 nível AA.
- Toda ação deve funcionar por teclado.
- Estados não podem depender apenas de cor.
- Formulários devem associar rótulos, erros e instruções aos campos.

### NFR-COMP-001 — Compatibilidade

- Suporte às duas versões estáveis mais recentes de Chrome, Edge e Firefox.
- Layout funcional a partir de 360 px de largura.
- Datas e números devem usar pt-BR e fuso da organização.

### NFR-QUAL-001 — Qualidade

- Regras de domínio DEVEM possuir testes unitários.
- Persistência, autorização e isolamento DEVEM possuir testes de integração.
- Cada jornada Must DEVE possuir ao menos um teste end-to-end.
- Migrações de banco DEVEM ser versionadas e testadas em base vazia e base da
  versão anterior.
- Contrato OpenAPI DEVE ser validado no CI.
- Nenhum teste pode ser desabilitado para liberar deploy.

### NFR-COST-001 — Controle de custo

- Serviços devem escalar a zero ou ao menor nível possível durante o piloto.
- Custos variáveis de e-mail, armazenamento e IA DEVEM ser medidos por tenant.
- Limites e alertas de orçamento DEVEM ser configurados antes do piloto.
- Recurso que exceda o orçamento definido deve degradar de modo seguro, sem
  comprometer o fluxo manual.

## 13. Política de IA do produto

- IA é assistência, não autoridade.
- Sugestões nunca alteram ticket ou enviam resposta sem ação humana.
- O recurso é ativado por feature flag e consentimento do tenant.
- Toda saída passa por validação estrutural e regras de domínio.
- O produto deve exibir que o conteúdo foi gerado por IA.
- O usuário pode rejeitar sem prejuízo ao fluxo.
- O sistema registra modelo, versão do prompt, confiança e decisão, mas evita
  guardar dados pessoais desnecessários.
- Dados de um tenant nunca são usados como contexto de outro.
- Prompt injection em conteúdo de ticket deve ser tratado como dado não
  confiável.
- Timeout máximo recomendado: 5 segundos; após isso, o fluxo manual continua.
- Um limite mensal por tenant evita custo inesperado.

## 14. Eventos de produto e indicadores

O produto DEVE emitir eventos analíticos sem conteúdo sensível:

- organization_created;
- onboarding_completed;
- member_invited;
- first_ticket_created;
- ticket_assigned;
- first_agent_response;
- ticket_resolved;
- ticket_reopened;
- ticket_closed;
- sla_at_risk;
- sla_breached;
- ai_suggestion_created;
- ai_suggestion_accepted;
- ai_suggestion_edited;
- ai_suggestion_rejected;
- csat_submitted.

Cada evento contém tenant pseudonimizado, versão do produto, instante e
identificadores técnicos necessários à métrica.

## 15. Interfaces que deverão ser especificadas

O OpenAPI será derivado deste PRD e deverá cobrir, no mínimo:

- autenticação e recuperação de acesso;
- organizações e onboarding;
- convites e integrantes;
- clientes;
- categorias e SLAs;
- tickets, atribuição e transições;
- interações públicas e internas;
- portal do cliente;
- dashboard;
- auditoria;
- sugestões de IA;
- CSAT e, se promovidos para o piloto, anexos.

Eventos assíncronos devem usar nomes versionados, payload mínimo e chave de
idempotência. A especificação técnica decidirá REST, formato de erros,
paginação, concorrência e versionamento sem alterar as regras deste PRD.

## 16. Entregas verticais

### Slice 0 — Fundação

- repositório e convenções;
- CI com build, testes e análise de segurança;
- ambientes local, preview e produção;
- observabilidade mínima;
- banco e migrações;
- esqueleto Angular e Spring Boot.

**Saída verificável:** frontend e API respondem em ambiente de preview, com
health checks e deploy reproduzível.

### Slice 1 — Organização e acesso

- FR-ORG-001 e FR-ORG-002;
- FR-AUTH-001 e FR-AUTH-002;
- FR-USR-001 e FR-USR-002;
- transporte mínimo de e-mail para convite e recuperação;
- isolamento multi-tenant básico.

**Saída verificável:** administrador cria organização, convida atendente e ambos
acessam somente o próprio tenant.

### Slice 2 — Núcleo de tickets

- FR-CUS-001 e FR-CAT-001;
- FR-TKT-001 e FR-TKT-003 a FR-TKT-006;
- lista, detalhe e histórico inicial.

**Saída verificável:** equipe cria, filtra, atribui e classifica ticket real.

### Slice 3 — Conversa e SLA

- FR-TKT-007 e FR-TKT-008;
- FR-INT-001 e FR-INT-002;
- FR-SLA-001 e FR-SLA-002;
- jobs idempotentes.

**Saída verificável:** ciclo completo respeita transições, pausas e prazos.

### Slice 4 — Portal e comunicação

- FR-TKT-002;
- FR-PORTAL-001 e FR-PORTAL-002;
- FR-NOTIF-001;
- anexos se promovidos para Must.

**Saída verificável:** cliente abre, acompanha e responde sem ver dados internos.

### Slice 5 — Gestão e validação

- FR-DASH-001;
- FR-AUD-001;
- FR-CSAT-001;
- eventos analíticos.

**Saída verificável:** gestor acompanha operação e métricas de um piloto.

### Slice 6 — IA e hardening

- FR-AI-001 e FR-AI-002;
- testes de segurança e isolamento;
- teste de restauração;
- orçamento e limites;
- revisão de acessibilidade.

**Saída verificável:** IA pode falhar sem interromper o atendimento e o produto
cumpre a Definition of Done.

## 17. Definition of Done do MVP

O MVP está pronto para piloto somente quando:

- todos os requisitos Must possuem evidência de teste;
- jornadas de ADMIN, ATENDENTE e CLIENTE passam em ambiente de preview;
- teste negativo entre dois tenants passa;
- build e migrações são reproduzíveis;
- backup e restauração foram verificados;
- alertas e dashboards operacionais existem;
- não há vulnerabilidade crítica conhecida sem mitigação aprovada;
- políticas de privacidade e termos do piloto estão disponíveis;
- feature de IA pode ser desligada sem indisponibilidade;
- custo estimado e limites dos provedores foram documentados;
- dados de demonstração não aparecem em produção;
- deploy de produção exige aprovação humana e possui rollback documentado.

## 18. Regras para desenvolvimento SDD com IA

1. Nenhuma implementação começa sem requisito ou tarefa vinculada a um ID.
2. Cada slice é dividido em incrementos pequenos e demonstráveis.
3. Cada PR informa requisitos cobertos, decisões e evidências de teste.
4. A IA pode gerar código, testes e documentação, mas não aprova a própria
   mudança para produção.
5. Comportamento não definido vira pergunta ou ADR; não vira suposição oculta.
6. Alteração de regra de negócio atualiza primeiro a especificação.
7. OpenAPI, migrações e testes são parte da mesma entrega.
8. Segredos, dados reais e credenciais nunca entram em prompts ou repositórios.
9. Migrações destrutivas exigem plano de compatibilidade, backup e aprovação.
10. Dependências novas exigem justificativa de valor, segurança, licença e custo.
11. Agentes não implementam itens Should, Could ou Won't durante uma tarefa Must
    sem mudança explícita de escopo.
12. Deploy de preview pode ser automático; produção exige gate humano no MVP.

## 19. Estratégia de lançamento

### Fase interna

- organização de demonstração;
- dados sintéticos;
- testes das três jornadas;
- validação de métricas, alertas e custo.

### Piloto assistido

- até três PMEs;
- onboarding acompanhado;
- revisão semanal de uso e dificuldades;
- canal direto para feedback;
- nenhuma cobrança enquanto hipóteses essenciais estiverem instáveis.

### Critérios para ampliar

- pelo menos duas organizações ativas após 30 dias;
- nenhuma violação conhecida de isolamento;
- fluxo principal utilizado sem suporte constante;
- custos por organização conhecidos;
- ao menos uma evidência de disposição a pagar.

## 20. Riscos e mitigação

| Risco                               | Impacto | Mitigação no MVP                           |
| ----------------------------------- | ------- | ------------------------------------------ |
| Escopo crescer antes da validação   | Alto    | Won't explícito e slices fechados          |
| Vazamento entre tenants             | Crítico | Filtro central, testes negativos e revisão |
| WhatsApp dominar a demanda          | Alto    | Validar portal primeiro e medir pedidos    |
| IA produzir classificação errada    | Médio   | Sugestão opcional e decisão humana         |
| Custos de IA ou e-mail crescerem    | Médio   | Quotas, métricas e fallback manual         |
| Baixa adoção da equipe              | Alto    | Onboarding curto e entrevistas de piloto   |
| Métricas inconsistentes             | Médio   | Fórmulas únicas e datasets de referência   |
| Dependência de múltiplos provedores | Médio   | adapters, timeouts e operação degradada    |
| Exigências de LGPD subestimadas     | Alto    | minimização, procedimentos e revisão legal |

## 21. Decisões pendentes

As decisões abaixo não bloqueiam a redação do PRD, mas devem ser resolvidas antes
do slice relacionado:

| ID      | Decisão                                                    | Prazo lógico            |
| ------- | ---------------------------------------------------------- | ----------------------- |
| DEC-001 | Confirmar nome comercial e domínio                         | Antes do piloto público |
| DEC-002 | Escolher provedor de autenticação ou implementação própria | Slice 0                 |
| DEC-003 | Escolher provedor PostgreSQL e estratégia de backup        | Slice 0                 |
| DEC-004 | Escolher provedor de e-mail transacional                   | Antes do Slice 1        |
| DEC-005 | Confirmar se anexo entra no primeiro piloto                | Antes do Slice 4        |
| DEC-006 | Escolher provedor e modelo de IA                           | Antes do Slice 6        |
| DEC-007 | Definir orçamento mensal máximo do piloto                  | Slice 0                 |
| DEC-008 | Validar metas de SLA com empresas entrevistadas            | Antes do Slice 3        |
| DEC-009 | Definir base legal e prazos finais de retenção             | Antes do piloto         |

## 22. Próximos artefatos

Este PRD deve originar, nesta ordem:

1. mapa de contexto e modelo de domínio;
2. ADRs de arquitetura, tenancy, autenticação e deployment;
3. threat model e modelo de permissões;
4. contrato OpenAPI inicial;
5. catálogo de eventos;
6. modelo lógico do banco e estratégia de migrações;
7. protótipo dos fluxos essenciais;
8. plano de testes por requisito;
9. backlog dos slices com rastreabilidade;
10. infraestrutura como código e runbook operacional.

## 23. Critério de aprovação deste PRD

O documento pode mudar de Draft para Approved quando produto e engenharia
confirmarem:

- problema, público e proposta de valor;
- limites Must, Should, Could e Won't;
- três perfis do MVP;
- estados e regras de SLA;
- metas de piloto;
- política de IA;
- decisões que precisam ser tomadas antes de cada slice.

Após aprovação, mudanças que afetem comportamento, escopo ou métricas devem ser
versionadas e acompanhadas de impacto nos requisitos, testes e roadmap.
