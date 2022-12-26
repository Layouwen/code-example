import axios from 'axios'

export const fetchData = () => {
  return axios.get('https://jsonplaceholder.typicode.com/todos/1')
}

export const fetch404 = () => {
  return axios.get('https://layouwen')
}
