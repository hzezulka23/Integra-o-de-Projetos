# Integração entre Webservice e Banco de Dados

Trabalho Final da disciplina BLU3024 - Integração de Sistemas para Automação, UFSC - Campus Blumenau

## Function:
O algoritmo desenvolvido recebe uma requisição do cliente e de acordo com o tipo de soliticação realizada enviará informações acerca do clima do Porto de Itajaí e do tempo de deslocamento deste local até uma das localidades disponíveis.

## Quick start:
<p>1- Fazer download completo do repositório.<p>
<p>2- Abrir algum navegador e acessar o endereço:http://206.189.231.128:3000.
<p>3- Inserir o nome de um dos seguintes locais no campo 'Cidade':<p>  
<p>- Navegantes<p>   
<p>- Prefeitura<p> 
<p>- UFSC<p> 
<p>- Vila Germânica<p> 
<p>4- Pressionar o botão 'Enviar'.<p>
<p>5- O resultado exibido será mostrado nos campos 'Carro' (tempo de deslocamento de carro) e 'Ônibus' (tempo de deslocamento de ônibus) ambos no formato no formato textual.<p>
 
## System Structure:
**Módulo 1: Obter Informações**  
Responsável por acessar o webservice Open Weather Map a cada um minuto para obter informações do clima do Porto de Itajaí:
- Temperatura atual em graus Celsius.
- Umidade relativa do ar atual.  
- Velocidade e direção do vento atuais.  

Além das informações do clima, também é responsável por acessar o webservice do Google Maps para obter o tempo de deslocamento deste local até uma das quatros localidades disponíveis:
- UFSC Blumenau (coordenadas: -26.920729, -49.098526).  
- Vila Germânica (coordenadas: -26.914024, -49.085023).  
- Prefeitura de Blumenau (coordenadas: -26.877582, -48.649516).  
- Aeroporto de Navegantes (coordenadas: -26.877582, -48.649516).  

**Módulo 2: Salvar Informações**  
Responsável por persistir as leituras do clima e dos tempos de deslocamento em um banco de dados NoSQL, o Cassandra.  

**Módulo 3: Disponibilizar Informações**  
Responsável por atender as requisições dos clientes, o webservice deve disponibilizar informações de acordo com o tipo de requisição enviado pelo cliente as seguintes informações:
- Nome do local a que os dados armazenados pelo webservice se referem (neste caso Porto de Itajaí)
- Data da última leitura de dados.
- Hora da última leitura de dados.
- Temperatura atual.  
- Umidade relativa do ar atual.  
- Velocidade e direção do vento.  
- Tempo de deslocamento, tanto de carro, quanto de ônibus, do Porto de Itajaí até o local solicitado pelo cliente (um dos quatro locais disponíveis citados acima).  

## Results: 
**Resultado Navegantes:**  
![nav](https://user-images.githubusercontent.com/35512686/42123310-2af29052-7c26-11e8-94a5-92f9fd8424cf.jpg)  
**Resultado Prefeitura:**  
![pref](https://user-images.githubusercontent.com/35512686/42123311-2b1b7c06-7c26-11e8-874c-cf3e976c5b37.jpg)  
**Resultado UFSC:**  
![ufsc](https://user-images.githubusercontent.com/35512686/42123312-2b6ebb78-7c26-11e8-9166-3e998e990155.jpg)  
**Resultado Vila Germânica:**  
![vila](https://user-images.githubusercontent.com/35512686/42123318-3c16585a-7c26-11e8-88f2-db9861754c0d.jpg)  

## Requirements:
- Cassandra
- XXXXX
## License:
This toolbox is under the MIT License: http://opensource.org/licenses/MIT.

