# ADR-0003 — Autenticação gerenciada

## Status

Proposed

## Contexto

O MVP exige cadastro, verificação de e-mail, recuperação de acesso, convite,
revogação e autenticação para equipe e clientes. Implementar armazenamento de
senha, tokens e entrega de e-mail aumentaria risco e desviaria esforço do
domínio principal.

O produto ainda precisa manter autorização, memberships e portal access em seu
próprio domínio. Claims do provedor não podem substituir regras de tenant.

## Decisão proposta

Usar um provedor gerenciado de identidade com suporte a e-mail e senha,
verificação, recuperação e JWT assinado. Supabase Auth é a primeira opção para
prova de conceito por integração simples e baixo custo inicial, sujeito a
validação técnica e comercial atual.

Responsabilidades:

| Provedor de identidade          | NexoDesk                                |
| ------------------------------- | --------------------------------------- |
| Credencial e hash de senha      | Organization, Membership e PortalAccess |
| Verificação de e-mail           | Papéis e permissões                     |
| Recuperação de acesso           | Isolamento do tenant                    |
| Emissão e revogação de sessão   | Convites de negócio                     |
| Proteção básica de autenticação | Auditoria de ações                      |

O Angular usa o fluxo oficial do provedor. A API Spring Boot funciona como
resource server, valida assinatura, emissor, audiência e expiração do JWT e
converte subject em ActorContext local.

Papéis enviados pelo frontend ou em metadata editável pelo usuário são
ignorados. Toda autorização usa dados locais ativos.

## Fluxos

### Administrador inicial

1. usuário registra identidade;
2. provedor verifica e-mail;
3. NexoDesk cria Organization e Membership ADMIN atomicamente;
4. evento de ativação é auditado.

### Convite de atendente

1. ADMIN cria Membership INVITED;
2. NexoDesk envia link opaco com validade;
3. convidado autentica ou cria identidade no provedor;
4. API valida token e e-mail esperado;
5. Membership torna-se ACTIVE.

### Portal do cliente

1. visitante acessa slug da organização;
2. verifica e-mail pelo provedor;
3. NexoDesk vincula User a Customer ou cria ambos localmente;
4. PortalAccess limita autorização aos tickets daquele Customer.

## Alternativas consideradas

### Spring Security com credencial própria

Oferece controle, mas aumenta superfície crítica, e-mails, tokens, recuperação
e responsabilidade operacional. Pode ser revista se o provedor bloquear
requisitos essenciais.

### Keycloak autogerenciado

Flexível, porém adiciona serviço, banco, upgrades e disponibilidade ao piloto.

### Provedor SaaS comercial especializado

Clerk, Auth0 e equivalentes serão comparados, mas custo por usuário e limites
do plano devem ser validados antes da escolha.

## Consequências positivas

- reduz código de segurança sensível;
- entrega verificação e recuperação mais cedo;
- padrões e SDKs maduros;
- API continua dona da autorização e tenancy.

## Consequências negativas

- dependência externa no login;
- limites e preço podem mudar;
- UX de convite pode exigir adaptação ao provedor;
- exclusão e exportação precisam coordenar identidade e dados locais.

## Controles obrigatórios

- validar iss, aud, exp, assinatura e algoritmo permitido;
- cache de chaves com rotação segura;
- não aceitar papel ou tenant de metadata controlada pelo usuário;
- revogar acesso local imediatamente quando Membership for desativada;
- rate limit adicional na borda;
- logs sem JWT, token de refresh ou links de recuperação;
- testes de token expirado, emissor errado, audiência errada e chave rotacionada.

## Validação antes de Accepted

- protótipo dos três fluxos;
- validar convite para identidade existente e nova;
- confirmar política de retenção, região e não uso de dados;
- confirmar exportação e exclusão LGPD;
- testar indisponibilidade e expiração de sessão;
- comparar custo projetado do piloto.
