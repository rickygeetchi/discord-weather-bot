import * as OpenWeather from '@cicciosgamino/openweather-apis'

const apiKey = "";
const client = await new OpenWeather.AsyncWeather();
// const zipCode = 64109;
client.setApiKey(apiKey);
client.setUnits('imperial');
client.setZipCodeAndCountryCode(64109, 'US');


export async function getTemperature(zipCode){
    client.setZipCodeAndCountryCode(zipCode, 'US');
    const temp = await client.getTemperature();
   return temp;
   
   
}

// client.getTemperature();
// console.log('huh');
