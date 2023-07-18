import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '246fefc72bce4f7bafcff78bf68de444'
    }
})