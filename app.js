const express = require('express')
const axios = require('axios');
require('dotenv').config();

const app = express()
app.use(express.json())

const getNews = async (req, res) =>{
const encodedParams = new URLSearchParams();
encodedParams.set('q', 'new');
encodedParams.set('target', 'am');
encodedParams.set('source', 'en');

const options = {
  method: 'POST',
  url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'Accept-Encoding': 'application/gzip',
    'X-RapidAPI-Key': 'proccess.env.api_key',
    'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
  },
  data: encodedParams,
};

try {
	const response = await axios.request(options);
	res.send(response.data)
} catch (error) {
	console.error(error);
}
    
}
app.get('/translate', getNews)

const PORT =3000
app.listen(PORT, () => {
     console.log(`app listening on port ${PORT}`)
})
