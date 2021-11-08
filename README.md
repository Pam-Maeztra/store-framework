# MVP Sport

---

## Pacotes globais necessários

---

```
   yarn global add vtex
   yarn global add gulp
   yarn global add concurrently
```

## Apps Utilizados

---

|             Apps Utilizados              |                                   Documentação                                   |
| :--------------------------------------: | :------------------------------------------------------------------------------: |
| vtexeurope.minicart-freeshipping-bar@1.x |        [VTEX DOC](https://github.com/vtex-apps/minicart-freeshipping-bar)        |
|           vtex.wish-list@1.x             |        [VTEX DOC](https://vtex.io/docs/components/all/vtex.wish-list@1.7.12/)    |
|       vtex.reviews-and-ratings@2.x       | [VTEX DOC](https://vtex.io/docs/components/all/vtex.reviews-and-ratings@2.11.7/) |

## Inicializando o Projeto

---

> **Observação: Este projeto utiliza VTEX IO** > **Observação: Siga estes passos para inicializar o projeto**

1. Verificar se esta logado na VTEX do seu cliente
   - `vtex whoami`
     - `info: Logged into {{accountClient}} as yourUser@maeztra.com at production workspace master`
2. Instalar os pacotes do node
   - `yarn`

### Isso aparecerá em sua tela

---

```
$ yarn
yarn install v1.22.11
[1/4] Resolving packages...
success Already up-to-date.
$ gulp css
[16:36:56] Requiring external module babel-register
[16:36:56] Using gulpfile ~\Documents\Maeztra\accountname.store-theme\gulpfile.babel.js
[16:36:56] Starting 'css'...
[16:36:56] Finished 'css' after 325 ms
Done in 26.05s.
```

## Desenvolvendo no Projeto

---

1. Agora para começar a desenvolver voce precisa saber se esta logado no seu {{accountClient}}
   - `vtex whoami`
     - `info: Logged into {{accountClient}} as yourUser@maeztra.com at production workspace master`
2. Criar seu próprio workspace
   - `vtex use exampleWorkspace`
     - A partir disso voce criará seu próprio workspace para realizar suas alterações
3. Dar start em seu projeto
   - `yarn start`
     - Com esse comando o seu link do vtex e seu gulp watch estarão rodando concorrentemente
4. Agora e só codar.

## Workflow

---

1. Ao dar commit, não utilize a branch master, crie uma branch com o nome da atividade que estiver atuando com gitflow.
2. Dê pull request para a master somente quando finalizar a atividade e for aprovada.
3. Ao dar pull request, peça para que um colega de equipe faça um code review e a aprove.

## Contríbua

---

A organização desse repositório trabalha com esquema de gitflow:

1. [Fluxo de trabalho de Gitflow](https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow)
2. [Git Flow Explained: Quick and simple
   ](https://medium.com/@muneebsajjad/git-flow-explained-quick-and-simple-7a753313572f)
