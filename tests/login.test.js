import http from 'k6/http'; // importar a biblioteca http do k6
import { sleep, check } from 'k6'; // importar as funções sleep & check do k6

export const options = {  // declarar a constante 'options' para exportação, visando setar as configurações e critérios do teste 
  vus: 10,
  duration: '30s',
  thresholds: {
    http_req_duration: ['p(90)<3000', 'max<5000'],
    http_req_failed: ['rate<0.01']
  },
}

export default function() { // declarar a função default como exportação e incluir o target URL e 1 segundo de pausa. É aqui que o teste será realizado.

    // criar uma constante para cada informação a ser enviada na request (url, payload, content etc)
    // incluir checks para validar o funcionamento da API
  

  const url = 'http://localhost:3000/login'

  const payload = JSON.stringify({
    username: 'julio.lima',
    senha: '123456',
  })

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

