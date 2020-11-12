![cabecalho memed desafio](https://user-images.githubusercontent.com/2197005/28128758-3b0a0626-6707-11e7-9583-dac319c8b45b.png)

# Desafio Checkout de Medicamentos

## Problema:

Uma das maiores preocupações da Memed, ao se focar em tornar a área de saúde mais eficiente, é a adesão do paciente ao tratamento. Em grande parte dos casos, após o paciente sair de uma consulta, ele procurará uma farmácia para a compra dos medicamentos prescritos. 

O sucesso da compra dos medicamentos está ligado a dois principais fatores:
- Preço dos medicamentos
- Distância até a farmácia

## Solução:

Criar um site mobile, onde o paciente possa encontrar a farmácia mais próxima e com o menor custo dos medicamentos a serem comprados.

## Proposta:

A solução pode ser feita com ou sem frameworks front-end e back-end, mas deve utilizar os seguintes Design Patterns:
* Repository
* Service Locator
* Command
* MVC
* Singleton

Não é necessário utilizar o mesmo pattern em ambas as partes da aplicação (front-end e back-end).

O back-end deve ser uma API REST, de preferência, uma [JSON API](http://jsonapi.org/). Não é necessária autenticação para acessar o sistema, queremos que você se concentre na localização da melhor farmácia.

Não é necessário capturar a localização real do paciente (dispositivo), utilize a localização da Memed:

```json
{
	lat: -23.5648304,
	lon: -46.6436604
}
```

Montamos uma API REST (usando AWS Lambda + JS \o/) com uma pequena lista de farmácias, suas localizações e preços:

| Método | URL			 | Descrição |
| ------ | ------------- | --------- |
| GET    | https://wydfdauvw5.execute-api.sa-east-1.amazonaws.com/desafio/farmacias | Lista de farmácias |
| GET    | https://wydfdauvw5.execute-api.sa-east-1.amazonaws.com/desafio/farmacias/{id-da-farmacia} | Informações adicionais da farmácia (lista de medicamentos) |

Considere que os medicamentos a serem comprados são:
- Ácido zoledrônico 4mg
- Água para injeção 1mL
- Bromazepam 3mg

Fique a vontade para usar algum framework CSS (ex: Bootstrap, Material, Semantic UI).

Para enviar seu código, faça um fork deste repositório e nos avise quando concluir o desafio (:white_check_mark: as mensagens dos seus commits também serão analisadas). 

Lembre-se de alterar o README.md com as instruções para rodar o projeto.

## Etapas:

1 - O usuário deverá encontrar a lista de medicamentos que deseja comprar ao acessar o site:

![lista](https://user-images.githubusercontent.com/2197005/28282427-cdb0906a-6b00-11e7-9615-19936b24d0fd.png)

2 - Ao clicar no botão "Encontrar Farmácia", deverá ser encontrada a farmácia mais próxima e com o menor valor total:

![checkout](https://user-images.githubusercontent.com/2197005/28282428-cdae34fa-6b00-11e7-9814-7707e7b326bd.png)

Boa sorte _and let’s code_!

:m: Equipe Memed