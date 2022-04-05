import axios from 'axios';
import { API_TOKEN } from "@env"

const getFilmsFromApiWithSearchedText = async (text, page) => {
    /* await slowNetwork() */
    const url =
        "https://api.themoviedb.org/3/search/movie?api_key=" +
        API_TOKEN +
        "&language=fr&query=" +
        text +
        "&page=" +
        page;
    const response = await axios.get(url);
    console.log("--getFilmsFromApiWithSearchedText--")
    console.log(url)
    console.log(response.data)
    console.log("--fin getFilmsFromApiWithSearchedText--")
    return response.data
}

const getFilmDetailFromApi = async (id) => {
    const url =
        'https://api.themoviedb.org/3/movie/' +
        id +
        '?api_key=' +
        API_TOKEN +
        '&language=fr'
    const response = await axios.get(url)
    return response.data
}

const getImageFromApi = (name) => {
    if (name === null || name === undefined)
        return require('../assets/filmVide.png')
    return { uri: 'https://image.tmdb.org/t/p/w300' + name };
}

const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds))
}

/* async function slowNetwork() {
await sleep(50)
} */

export default { getFilmsFromApiWithSearchedText }
export {
    getFilmDetailFromApi,
    getImageFromApi,
    getFilmsFromApiWithSearchedText,
}