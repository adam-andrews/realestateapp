import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"



export const fetchApi = async (url) => {
    const {data} = await axios.get(url,{
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '2fd47c63a9mshfc16f5aefde068dp154e4djsnb1ca3db0aae6'
          }
    })
}