//config.js
import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "https://capstone2team.herokuapp.com/"
})