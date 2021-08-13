const axios = require('axios');

module.exports = async function openWeatherCALL(cityName, { baseURL, key }) {
    try {
        const { data } = await axios.get(baseURL, {
            params: {
                q: cityName,
                units: "metric",
                appid: key
            }
        });
        return data;
    } catch (error) {
        console.dir(error);
        return error;
    }
}