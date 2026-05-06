const postLogin = JSON.parse(open('../fixtures/postLogin.json'))
import http from 'k6/http' 
import { pegarBaseUrl } from '../utils/variaveis.js'

export function obterToken() {
  const url = pegarBaseUrl() + '/login'
  

  const payload = JSON.stringify(postLogin)
  
  const params = {
    headers: {
      'Content-Type': 'application/json',
    }
  }
  
  const response = http.post(url, payload, params)

  return response.json('token') // obtenho a resposta da requisição e capturo apenas o elemento token
}