import axios from 'axios'

export const api = axios.create({
    baseURL: "http://hp-api.herokuapp.com/api/characters"
})