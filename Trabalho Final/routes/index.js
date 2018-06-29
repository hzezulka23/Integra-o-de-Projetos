var express = require('express');
const app = express()
var router = express.Router();
const bodyParser = require('body-parser');
const request = require('request');	
const APIKEY = '9f113936f82d88cf101a5b3454c02e21';
const cassandra = require('cassandra-driver');
const client =  new cassandra.Client({contactPoints:['127.0.0.1'],keyspace:'dados'});
client.connect(function (err,result) {
	console.log("Cassandra Conectado");	
	});


/* GET Pages. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/Blumenau', function(req, res, next) {

  var Blumenau=[0,1,2,3]; 
 
  let url = 'http://api.openweathermap.org/data/2.5/weather?lat=-26.920729&lon=-49.098526&units=metric&appid=9f113936f82d88cf101a5b3454c02e21';

 request(url, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again'});
    } else {
      let weather = JSON.parse(body)
         console.log(weather.main.temp);
         console.log(weather.main.humidity);
	 console.log(weather.wind.speed);
         console.log(weather.wind.deg);
	Blumenau = [weather.main.temp,weather.main.humidity,weather.wind.speed,weather.wind.deg];
	res.send(Blumenau);
      if(weather.main == undefined){
        res.render('index', {weather: null, error: 'Error, please try again'});
      } else {
        let weatherText = 'Its ${weather.main.temp} degrees in ${weather.name}!';
        res.render('index', {weather: weatherText, error: null});
      }
    }
  }); 	
});

router.get('/Itajai', function(req, res, next) {

  var Itajai=[0,1,2,3]; 
 
  let url = 'http://api.openweathermap.org/data/2.5/weather?lat=-26.901071&lon=-48.668377&units=metric&appid=9f113936f82d88cf101a5b3454c02e21';

 request(url, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again'});
    } else {
      let weather = JSON.parse(body)
         console.log(weather.main.temp);
         console.log(weather.main.humidity);
	 console.log(weather.wind.speed);
         console.log(weather.wind.deg);
	Itajai = [weather.main.temp,weather.main.humidity,weather.wind.speed,weather.wind.deg];
	res.send(Itajai);
      if(weather.main == undefined){
        res.render('index', {weather: null, error: 'Error, please try again'});
      } else {
        let weatherText = 'Its ${weather.main.temp} degrees in ${weather.name}!';
        res.render('index', {weather: weatherText, error: null});
      }
    }
  }); 	
});

router.get('/Navegantes', function(req, res, next) {

  var Navegantes=[0,1,2,3]; 
 
  let url = 'http://api.openweathermap.org/data/2.5/weather?lat=-26.877582&lon=-48.649516&units=metric&appid=9f113936f82d88cf101a5b3454c02e21';

 request(url, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again'});
    } else {
      let weather = JSON.parse(body)
         console.log(weather.main.temp);
         console.log(weather.main.humidity);
	 console.log(weather.wind.speed);
         console.log(weather.wind.deg);
	Navegantes = [weather.main.temp,weather.main.humidity,weather.wind.speed,weather.wind.deg];
	res.send(Navegantes);
      if(weather.main == undefined){
        res.render('index', {weather: null, error: 'Error, please try again'});
      } else {
        let weatherText = 'Its ${weather.main.temp} degrees in ${weather.name}!';
        res.render('index', {weather: weatherText, error: null});
      }
    }
  }); 	
});

router.get('/Directions_to_Vila', function(req, res, next) {

  var Direct1=[0,1]; 
 
  let url = 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=-26.9049464,-48.6811216&destinations=-26.9155074,-49.0849882&units=metric&departure_time=now&traffic_model=best_guess&mode=driving&key=AIzaSyDYJ6H1y5OrGLi1zZiBBSNsN3wzHsdcv-8';
  let urlb = 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=-26.9049464,-48.6811216&destinations=-26.9155074,-49.0849882&units=metric&departure_time=now&traffic_model=best_guess&mode=transit&key=AIzaSyDYJ6H1y5OrGLi1zZiBBSNsN3wzHsdcv-8';
 request(url, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again'});
    } else {
      let dire = JSON.parse(body)
      console.log(dire.rows[0].elements[0].duration.text);
      Direct1[0] = dire.rows[0].elements[0].duration.text
		request(urlb, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again'});
    } else {
      let direct = JSON.parse(body)
      console.log(direct.rows[0].elements[0].duration.text);
      Direct1[1] = direct.rows[0].elements[0].duration.text
      res.send(Direct1);
    }
  });
    }
  }); 	
});
router.get('/Directions_to_UFSC', function(req, res, next) {

  var Direct2=[0,1]; 
 
  let url = 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=-26.9049464,-48.6811216&destinations=-26.9209779,-49.09848318&units=metric&departure_time=now&traffic_model=best_guess&mode=driving&key=AIzaSyDYJ6H1y5OrGLi1zZiBBSNsN3wzHsdcv-8';
  let urlb = 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=-26.9049464,-48.6811216&destinations=-26.9209779,-49.09848318&units=metric&departure_time=now&traffic_model=best_guess&mode=transit&key=AIzaSyDYJ6H1y5OrGLi1zZiBBSNsN3wzHsdcv-8';
 request(url, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again'});
    } else {
      let dire = JSON.parse(body)
      console.log(dire.rows[0].elements[0].duration.text);
      Direct2[0] = dire.rows[0].elements[0].duration.text
		request(urlb, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again'});
    } else {
      let direct = JSON.parse(body)
      console.log(direct.rows[0].elements[0].duration.text);
      Direct2[1] = direct.rows[0].elements[0].duration.text
      res.send(Direct2);
    }
  });
    }
  }); 	
});

router.get('/Directions_to_Prefeitura', function(req, res, next) {

  var Direct3=[0,1]; 
 
  let url = 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=-26.9049464,-48.6811216&destinations=-26.9139245,-49.0691259&units=metric&departure_time=now&traffic_model=best_guess&mode=driving&key=AIzaSyDYJ6H1y5OrGLi1zZiBBSNsN3wzHsdcv-8';
  let urlb = 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=-26.9049464,-48.6811216&destinations=-26.9139245,-49.06912595&units=metric&departure_time=now&traffic_model=best_guess&mode=transit&key=AIzaSyDYJ6H1y5OrGLi1zZiBBSNsN3wzHsdcv-8';
 request(url, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again'});
    } else {
      let dire = JSON.parse(body)
      console.log(dire.rows[0].elements[0].duration.text);
      Direct3[0] = dire.rows[0].elements[0].duration.text
		request(urlb, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again'});
    } else {
      let direct = JSON.parse(body)
      console.log(direct.rows[0].elements[0].duration.text);
      Direct3[1] = direct.rows[0].elements[0].duration.text
      res.send(Direct3);
    }
  });
    }
  }); 	
});

router.get('/Directions_to_Navegantes', function(req, res, next) {

  var Direct4=[0]; 
 
  let url = 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=-26.9049464,-48.6811216&destinations=-26.8807269,-48.649035&units=metric&departure_time=now&traffic_model=best_guess&mode=driving&key=AIzaSyDYJ6H1y5OrGLi1zZiBBSNsN3wzHsdcv-8';
  let urlb = 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=-26.9049464,-48.6811216&destinations=-26.8807269,-48.649035&units=metric&departure_time=now&traffic_model=best_guess&mode=transit&key=AIzaSyDYJ6H1y5OrGLi1zZiBBSNsN3wzHsdcv-8';
 request(url, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again'});
    } else {
      let dire = JSON.parse(body)
      console.log(dire.rows[0].elements[0].duration.text);
      Direct4[0] = dire.rows[0].elements[0].duration.text
      res.send(Direct4);
    } });});
    
router.get('/SaveParam', function(req, res, next) {
	
    const insert = "insert into dados.clima(datevalue ,temperatura,umidade,vento)values('2015-10-30 16:10:32','10C','40%',('1km','sul'))";
    client.execute(insert,{ prepare: true }, function (err) {
        if (err) {
           	console.log("erro");
        }
        else{
            console.log("Inserido");
        }
        });
	
});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
module.exports = router;
