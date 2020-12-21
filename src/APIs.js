import axios from 'axios';
const API_KEY = "8ad79590652f4440a23fbe65683bd96f"

// export const  fetchData = async() =>{
//     try {      
//         let url = `language=en&apiKey=${API_KEY}`;
//         const response = await axios.get(url);
//         return response.data.articles;
//     } catch (error) {
//         console.log(error.message)
//     }
// }
export default axios.create({
    baseURL:"https://newsapi.org/v2/",
        params:{
            language:'en',
            apiKey:API_KEY,
        }
    })