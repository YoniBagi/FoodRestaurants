import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer RVG9sHnq2RjiDgBFAAHLQm6F8B1A_cfJytUv9yKnU7cd3fhboFNpiq9a1C9ncNw4nJKK_73ly23z1wBLPZEcCOfhiVJxXf72wDfc2-9siBpIEsA_6xO48ooukzuNX3Yx'
    }
})

