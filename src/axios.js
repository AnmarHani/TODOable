import Axios from 'axios';

const axios = Axios.create({
  baseURL: "https://todo-app-api-django.herokuapp.com/api/"
})


export default axios