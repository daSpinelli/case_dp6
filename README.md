# DP6 - Coleta de Dados

Este é um projeto tem como objetivo configurar o ambiente para coleta de dados de um website para o Google Analytics.

---

## Contexto

A DP6, como consultoria de Marketing Digital, atua em todo o espectro da Engenharia de Dados voltada ao Marketing dentro de um amplo ecossistema - coletamos dados de ambientes Web, Mobile, Videogames, Smart TV e qualquer dispositivo Internet Of Things, que esteja conectado à internet.

Por esse motivo temos um foco em ferramentas de MarTech (Tecnologias em Marketing) e AdTech (Tecnologia de Ad), como o Google Analytics, que está fortemente presente na primeira camada da Engenharia de Dados, que é a Coleta de Dados, e que servirá de insumo para processos futuros - em formas mais “tradicionais” através de processos de ETL e integração de dados com plataformas de parceiros, como também para construção de Data Warehouse/Data Lake orientado para Marketing!

Este case busca apresentar ao candidato uma das nossas disciplinas fundamentais e porta de entrada para o mundo do Marketing Analytics, base para todos os nossos produtos e serviços - planejamento e implementação de coleta de dados em ambiente Web Desktop.

---

## Planejamento

### Input

- Páginas do website
    - Completamente estruturada com códigos HTML, CSS e Javascript
    - Um arquivo Javascript chamado tagueamento.js vazio para input dos códigos de coleta

### Output

- Publicação do website configurado para a coleta com o google analytics com GitHub Pages

### Tasks

- Conectar com o Google Analytics
    - Estudar documentação do Google Analytics
    - Conectar via analytics.js
- Criar os eventos de disparo para cada área a ter o dado coletado
    - Encontrar os elementos nas páginas HTML
    - Criar as funções  para o evento (onClick ou addEventListener) aos elementos encontrados
- Adicionar o rastreio ao evento de disparo
    - Criar a função para a de coleta de dados
    - Criar um link entre as funções dos eventos e a função de coleta de dados
- Validar a coleta de dados
    - Baixar a extensão Roger Watcher da DP6
    - Ativar o servidor python na pasta raiz do projeto
    - Abrir a DevTools do navegador para trabalhar com a extensão e validar se a coleta está sendo executada de acordo com a configuração
- Publicar o website configurado
    - Criar repositório no GitHub com o nome de case_dp6
    - Configurar o repositório para GitHub Pages
    - Subir os arquivos para o repositório
    - Repetir a validação, agora no projeto publicado
    

---

## Lições aprendidas

Lembrei do quanto é divertido trabalhar com o javascript.

Mas também aprendi que é possível obter informações de utilização de cada elemento do website com a ferramenta de coleta. Assim é possível encontrar gargalos, como por exemplo onde o usuário perde o interesse na atividade, seja ela compra ou consumo de conteúdo, e gatilhos para o website como uma imagem que chama mais a atenção ou uma sessão específica.

Além disso, a facilidade de implementar a solução apenas com as tags e seus atributos (que podem ser obtidas na visualização do código fonte) e apenas adicionar uma chamada para o arquivo javascript no código é impressionante.

---

## Próximos passos

Estudar um pouco mais do javascript para organizar melhor o código.

Olhar do lado do analytics como os dados estão chegando e realizar o ETL. Assim poderei ter uma experiência completa.

---

Valeu por chegar até aqui! O/
