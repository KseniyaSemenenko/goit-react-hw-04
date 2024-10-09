import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
const myApiKey = "VsTQYjMQlqYQ2CwMUE430Sduq3BobRMTtA-x2hmUjF8"

export const searchResult = async photos => {
    const response = await axios.get(`/photo?client_id=${myApiKey}query=${photos}`);
    console.log(response);
}