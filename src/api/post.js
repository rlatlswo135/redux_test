import axios from 'axios';

const baseUrl = "http://localhost:4000/posts"

export const postGet = async() => {
    const request = await axios.get(baseUrl)
    return request
}
