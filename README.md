# Desafio CNPJ

Este projeto é uma aplicação desenvolvida com [NestJS](https://nestjs.com/) para estudar as regras do novo CNPJ alfanumérico.

## Funcionalidades

- Validação de CNPJ alfanumérico
- Formatação de CNPJ para diferentes padrões
- Integração com APIs externas para consulta de CNPJ

## Melhorias no Código

- **Organização dos Módulos:** Certifique-se de que os módulos estejam bem definidos e que cada um tenha responsabilidades claras.
- **Tratamento de Erros:** Implemente um tratamento de erros robusto para lidar com possíveis exceções durante a validação ou formatação do CNPJ.
- **Testes:** Inclua testes unitários e de integração para garantir que as funcionalidades relacionadas ao CNPJ estejam funcionando conforme o esperado.

## Instalação

```bash
# Clone o repositório
git clone https://github.com/GuilhermeSantiago25/Desafio-cnpj.git

# Navegue até o diretório do projeto
cd Desafio-cnpj

# Instale as dependências
yarn install
```

## Uso

```bash
# Execute a aplicação em modo de desenvolvimento
yarn start:dev

# A aplicação estará disponível em http://localhost:3000
```

## Testes

```bash
# Execute os testes unitários
yarn test

# Verifique a cobertura dos testes
yarn test:cov
```

## Estrutura do Projeto

- **src/**: Contém o código-fonte da aplicação
  - **app.module.ts**: Módulo raiz da aplicação
  - **cnpj/**: Módulo responsável pelas funcionalidades relacionadas ao CNPJ
    - **cnpj.controller.ts**: Controlador que lida com as requisições HTTP relacionadas ao CNPJ
    - **cnpj.service.ts**: Serviço que contém a lógica de negócios para validação e formatação de CNPJ
    - **dto/**: Contém os Data Transfer Objects usados para validação de dados de entrada
    - **entities/**: Contém as entidades usadas pela aplicação

## Tecnologias Utilizadas

- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Yarn](https://yarnpkg.com/)

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
