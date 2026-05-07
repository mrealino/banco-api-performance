import http from 'k6/http'; // importar a biblioteca http do k6
import { sleep, check } from 'k6'; // importar as funções sleep & check do k6
const postLogin = JSON.parse(open('../fixtures/postLogin.json')) //pega o texto da fixture e transforma em objeto para ser usado na chamada da API
import { pegarBaseUrl } from '../utils/variaveis.js'


export const options = {  // declarar a constante 'options' para exportação, visando setar as configurações e critérios do teste 

  stages: [
   { duration: '10s', target: 10 },
   { duration: '20s', target: 10 },
   { duration: '10s', target: 30 },
   { duration: '20s', target: 30 },
   { duration: '20s', target: 0 }
  ],
  
  thresholds: {
    http_req_duration: ['p(90)<3000', 'max<5000'],
    http_req_failed: ['rate<0.01']
  },
}

export default function() { // declarar a função default como exportação e incluir o target URL e 1 segundo de pausa. É aqui que o teste será realizado.

    // criar uma constante para cada informação a ser enviada na request (url, payload, content etc)
    // incluir checks para validar o funcionamento da API
  

  const url = pegarBaseUrl() + '/login'

  postLogin.username = "junior.lima" // usado para alterar alguma propriedade do arquivo fixture para o teste
  console.log(postLogin)
  
  const payload = JSON.stringify(postLogin)

  const params = {
    headers: {
      'Content-Type': 'application/json',
    }
  }

  const response = http.post(url, payload, params)

  check(response, {
    'Validar que status é 200': (r) => r.status === 200,
    'Validar que token é string': (r) => typeof(r.json().token) == 'string'
  })

  sleep(1);

}

