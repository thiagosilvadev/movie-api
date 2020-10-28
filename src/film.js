const axios = require("axios");

require("dotenv/config")

const film = {

   async search(search) {

        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=pt-BR&page=1&include_adult=false&query=${search}`);
        return response.data;
    }


}


module.exports = film