const YOUR_API_KEY = '';
//const STATION_NAME='st-andrews-international-school-green-valley';
const LATITUDE='12.7996896';
const LONGITUDE = '101.0653152';

const URL =`http://api.airvisual.com/v2/nearest_city?lat=${LATITUDE}&lon=${LONGITUDE}&key=${YOUR_API_KEY}`;


function check() {
  var scriptProperties = PropertiesService.getScriptProperties();
  var old_aqi = parseInt(scriptProperties.getProperty('aqi'));

  var aqi = get_airq();

  console.log(`${old_aqi} ${aqi}`);
  if (aqi != old_aqi) {
    scriptProperties.setProperty('aqi', aqi);
    sendEmail(aqi)
  }
}

function sendEmail(aqi) {
  var recipient = "";  // list of recipients, separated by comma 
  var subject = `${aqi} is Air Quality at St Andrews`; 
  var body = `
0 to 50	Good	Green
51 to 100	Moderate	Yellow
101 to 150	Unhealthy for Sensitive Groups	Orange
151 to 200	Unhealthy	Red
201 to 300	Very Unhealthy  Purple
301 to 500	Hazardous	Maroon`;

  GmailApp.sendEmail(recipient, subject, body);
}

function get_airq() {
  var response = UrlFetchApp.fetch(URL);
  var json = response.getContentText();
  var data = JSON.parse(json);
  const r = data.data;  
  return r.current.pollution.aqius;
}
