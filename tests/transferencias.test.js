import http from 'k6/http';
import { sleep, check } from 'k6';
import { obterToken } from '../helpers/auth.js';
import { pegarBaseUrl } from '../utils/variaveis.js'


export const options = {
  iterations: 1 // incluir stages & threshold
};

export default function() {
  const token = obterToken()

  const url = pegarBaseUrl() + '/transferencias';

  const payload = JSON.stringify( {
    contaOrigem: 1,
    contaDestino: 2,
    valor: 11,
    token: ""
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
  };



  const res = http.post(url, payload, params)

  check(res, { "status is 201": (res) => res.status === 201 });

  sleep(1);
}
