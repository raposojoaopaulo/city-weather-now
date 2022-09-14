const apiKey = "c25b219632d2ad8fe175c56c680fa45f";

export const apiWeather = (city: string) => {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;  
};

export const apiCountry = (country: string) => {
  return `https://countryflagsapi.com/png/${country}`
};
