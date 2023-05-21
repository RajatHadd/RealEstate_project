import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) =>{
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '9138d080ccmsh44972765a1ae0e0p1a15ecjsn20a00f8dd8fd',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    });

    return data;
}