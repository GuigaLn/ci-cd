# CI/CD (Integração Contínua e Entrega Contínua)

## O que é CI/CD?
CI/CD (Continuous Integration / Continuous Deployment) é um conjunto de práticas que automatiza o ciclo de vida do desenvolvimento de software, desde a integração do código até a entrega em produção.

---

## CI (Continuous Integration - Integração Contínua)
- Automatiza a integração de código de múltiplos desenvolvedores em um repositório compartilhado.
- Garante testes automatizados e builds consistentes.
- Detecta erros rapidamente, reduzindo conflitos de merge.
- Pode conter rotínas, onde ira rodar conjuntos de validações, como linting, typecheking, testes... Garantindo que o código fornecido não quebrou nenhuma lógica.

### Benefícios:
✅ Detecção precoce de bugs.<br>
✅ Menos conflitos ao integrar código.<br>
✅ Builds e testes automatizados.

### Ferramentas populares:
- **GitHub Actions**
- **GitLab CI/CD**
- **Jenkins**
- **CircleCI**
- **Travis CI**

---

## CD (Continuous Deployment / Continuous Delivery)
- **Continuous Delivery**: Automatiza o processo de entrega do software, permitindo que esteja sempre pronto para produção.
- **Continuous Deployment**: Vai além e implanta automaticamente o código em produção após passar nos testes.

### Benefícios:
✅ Redução de tempo entre desenvolvimento e entrega.<br>
✅ Feedback rápido sobre mudanças.<br>
✅ Menos intervenção manual na liberação.

### Ferramentas populares:
- **Docker**
- **Kubernetes**
- **AWS CodePipeline**
- **ArgoCD**
- **Spinnaker**

---

## Pipeline CI/CD
Um **pipeline CI/CD** é uma sequência automatizada de etapas que leva o código do desenvolvimento à produção de maneira eficiente. Basicamente definimos a hora que será e o que será executado.

### Etapas comuns:
1️⃣ **Commit & Push (CI)** - Código é enviado ao repositório.<br>
2️⃣ **Instalar dependências (CI)** - Rodaria o comando para instalar as dependências.<br>
3️⃣ **Testes (CI)** - Testes automatizados são executados.<br>
4️⃣ **Build (CD)** - O código é compilado e empacotado.<br>
5️⃣ **Deploy (CD)** - Aplicação é implantada em um ambiente de staging ou produção.<br>

### Benefícios:
✅ Maior confiabilidade e previsibilidade.<br>
✅ Redução do tempo de entrega.<br>
✅ Melhoria contínua através da automação.

---

## Fluxo CI/CD
1️⃣ Desenvolvedor faz commit no repositório 🚀<br>
2️⃣ Pipeline de CI executa testes e builds 🔄<br>
3️⃣ Se aprovado, código é integrado 🎯<br>
4️⃣ (CD) Aplicação é implantada automaticamente em produção 📦<br>


