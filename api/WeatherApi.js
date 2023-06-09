// weatherapi.com - api
import axios from "axios";
const ApiKey = process.env.API_KEY; // Please enter your api

const forecastEndpoint = (params) =>
  `https://api.weatherapi.com/v1/forecast.json?key=${ApiKey}&q=${params.cityName}&days=${params.days}`;

const locationsEndpoint = (params) =>
  `https://api.weatherapi.com/v1/search.json?key=${ApiKey}&q=${params.cityName}`;

const apiCall = async (endpoint) => {
  const options = {
    method: "GET",
    url: endpoint,
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log("error: ", error);
    return {};
  }
};

export const fetchWeatherForecast = (params) => {
  return apiCall(forecastEndpoint(params));
};

export const fetchLocations = (params) => {
  return apiCall(locationsEndpoint(params));
};
