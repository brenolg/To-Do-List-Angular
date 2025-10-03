# To-Do List (Angular + LocalStorage)

Aplicação web simples e eficiente para gerenciar tarefas do dia a dia.  
Você pode **adicionar**, **marcar como concluída (check)**, **apagar individualmente** e **apagar todas** as tarefas tudo isso **sincronizado automaticamente com o `localStorage`**, garantindo que sua lista continue lá mesmo após fechar o navegador.

<br/>

<img width="100%" src="./src/assets/img/bg-task.png" />



<a	href="https://brenolg.github.io/To-Do-List-Angular/"
	target="_blank"
	rel="noopener noreferrer"> To do list Page
<a/>

<br/>

##  Funcionalidades

- **Adicionar tarefa** com validação (ignora entradas vazias e espaços duplos);
- **Marcar/Desmarcar tarefa** como concluída (checkbox);
- **Editar texto** da tarefa inline;
- **Excluir tarefa individualmente**;
- **Excluir todas as tarefas** com um clique;
- **Persistência automática** no `localStorage` (carrega e salva a cada alteração);
- **Ordem de inserção personalizada** ;
- **Feedback visual** para tarefas concluídas (estilo “checked”).

##  Tecnologias Utilizadas

- **Angular** (v16+ ou v17+)
- **TypeScript**
- **HTML / SCSS**
- **LocalStorage**
- (Opcional) **angular-cli-ghpages** para deploy no GitHub Pages
- (Opcional) **Jasmine/Karma** para testes unitários

---

## 🚀 Instalação e Execução Local

> Não é necessário rodar localmente se você acessar a versão online.  
> Caso queira executar no seu ambiente, siga os passos:

1. **Clone o repositório**
```bash
git clone git@github.com:brenolg/To-Do-List-Angular.git
```

2. **Acesse a pasta e instale as dependências**
```bash
cd To-Do-List-Angular
npm install
```

3. **Inicie o servidor de desenvolvimento**
```bash
ng serve
```

4. **Abra no navegador**
```
http://localhost:4200
```

##  Requisitos do Projeto

1. Utilizar **Angular** para gerenciar estado e componentes;
2. Layout **responsivo** (desktop, tablet e mobile);
3. Estilização de **tarefas concluídas** (ex.: texto tachado / opacidade reduzida);
4. **Persistir tarefas** no `localStorage` (carregar/salvar automaticamente);
5. **Listar todas as tarefas** e permitir visualizar/editar cada uma;
6. **Adicionar tarefas** via input + botão/Enter;
7. **Marcar tarefas** como concluídas (checkbox);
8. **Excluir tarefa individualmente**;
9. **Excluir todas as tarefas** (com desabilitar quando lista vazia);

---

##  Agradecimentos

Agradeço à comunidade Angular pelo ecossistema e documentação de qualidade, e às pessoas que compartilham conhecimento abertamente. Seu feedback é bem-vindo — sugestões e PRs ajudam o projeto a evoluir!
