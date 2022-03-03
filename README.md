🙃
Olá!
O projeto foi desenvolvido utilizando Angular, TypeScript, SASS e Json Server para mockar requests REST. Como adicional, foi utilizada a lib Angular Material para criar um componente de dropdown.

O projeto consiste, basicamente, em dois domínios: o de Login e o de Registration. Sua estrutura de pastas está dividida nesses dois domínios. 

## Como rodar o projeto
Baixe o projeto e posteriormente rode `npm i` para instalar as dependências. Depois, `ng serve`. Em outra aba do terminal, rode `json-server db.json` para subir o server. Por default, ele irá abrir na porta 3000. Se possível, mantenha nessa porta, pois, caso contrário, os requests irão falhar. 

## Para navegar pelo projeto
É necessário que o usuário esteja logado como um cliente válido (Acme Co ou Tio Patinhas Bank) para conseguir ter acesso à tela de cadastro de novos colaboradores.

Para o login, faça uso de alguma dessas credenciais:

      email: ameco@email.com
      password: 1234

      email: tiopatinhasbank@email.com
      password: 4321

##  Organização do banco de dados (JSON Server)
Utilizei o JSON Server para mockar o server side. Ele cumpre alguns papéis, mas, devido a algumas limitações, não pude organizar os dados da forma como realmente gostaria. Por exemplo, criei dois domínios no arquivo `json.db`: o de `users` (referente à experiência de Login) e o de `registers` (referente à experiência de Registration).

No domínio de `registers`, seria muito mais interessante que existisse uma entidade representando cada cliente (Acme Co e Tio Patinhas Bank, por exemplo), e que cada entidade pudesse ter seus vários funcionários cadastrados. Uma relação de 1: N. Porém, o JSON Server não está preparado para "nested routes", por isso, a solução que encontrei foi colocar a referência do cliente (`companyId`) dentro do objeto de registro do usuário.

## Testes unitários
O comando `ng test` irá rodar os testes unitários do projeto. Gostaria de ter podido cobrido melhor os métodos dos serviços. 


## Melhorias para uma feature futura
Quando comecei a desenvolver o teste, imaginei que a melhor forma de criar um formulário que fosse moldável às necessidades de cada combinação possível de cadastro de cliente fosse criando um Builder. Acho que a abordagem me rendeu economizar em criar diversos inputs na View, mas trouxe alguns pontos que gostaria de ter pensado em soluções melhores, como: máscaras específicas para cada tipo de input e que cada input soubesse seu type, sem ser necessário criar a pipe InputType que criei para converter o problema de inputs com tipos diferentes. Também seria legal criar validações mais específicas para o formulário.

No mais, é isso.
Obrigada pela oportunidade :D
