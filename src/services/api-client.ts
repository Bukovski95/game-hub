import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '2ef9165213fe4344ad1697b528feef24'
    }
})