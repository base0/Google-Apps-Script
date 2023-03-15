const YOUR_API_KEY = '';
const CITY_NAME='ban-chang';
const STATE_NAME = 'rayong';
const COUNTRY_NAME = 'thailand';

const URL = `http://api.airvisual.com/v2/city?city=${CITY_NAME}&state=${STATE_NAME}&country=${COUNTRY_NAME}&key=${YOUR_API_KEY}`;

function myFunction() {
  console.log(URL);
  var response = UrlFetchApp.fetch(URL);
  var json = response.getContentText();
  var data = JSON.parse(json);
  Logger.log(json);
  Logger.log(data);
  const r = data.data;  
  var result = `${r.city} ${r.state} ${r.country} `
             + `${r.current.pollution.aqius} `
             + `${r.location.coordinates[0]} ${r.location.coordinates[1]}`;
  Logger.log(result); 
}
