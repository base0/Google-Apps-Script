const YOUR_API_KEY = '';
//const STATION_NAME='st-andrews-international-school-green-valley';
const LATITUDE='12.7996896';
const LONGITUDE = '101.0653152';

const URL =`http://api.airvisual.com/v2/nearest_city?lat=${LATITUDE}&lon=${LONGITUDE}&key=${YOUR_API_KEY}`;

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
             + `${r.location.coordinates[0]} ${r.location.coordinates[0]}`;
  Logger.log(result);
}
