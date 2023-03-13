import axios from "axios";

export const mainInstance = axios.create({
    baseURL: 'https://am2023.p0w-stage.ru/'
})
