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

router.get('/Blumenau', function(req, res) {

  var Blumenau=[0,1,2,3]; 
 
  let url = 'http://api.openweathermap.org/data/2.5/weather?lat=-26.920729&lon=-49.098526&units=metric&appid=9f113936f82d88cf101a5b3454c02e21';

 request(url, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again'});
    } else {
      let weather = JSON.parse(body)
         console.log("Consultando Dados Blumenau");
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

router.get('/Itajai', function(req, res) {

  var Itajai=[0,1,2,3]; 
 
  let url = 'http://api.openweathermap.org/data/2.5/weather?lat=-26.901071&lon=-48.668377&units=metric&appid=9f113936f82d88cf101a5b3454c02e21';

 request(url, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again'});
    } else {
      let weather = JSON.parse(body)
       console.log("Consultando Dados Itajai");
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
            console.log("Consultando Dados Navegantes");
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
         console.log("Consultando Direcoes para Vila");
      Direct1[0] = dire.rows[0].elements[0].duration.text
		request(urlb, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again'});
    } else {
      let direct = JSON.parse(body)
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
      console.log("Consultando Direcoes para UFSC");
      Direct2[0] = dire.rows[0].elements[0].duration.text
		request(urlb, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again'});
    } else {
      let direct = JSON.parse(body)
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
         console.log("Consultando Direcoes para Prefeitura");
      Direct3[0] = dire.rows[0].elements[0].duration.text
		request(urlb, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again'});
    } else {
      let direct = JSON.parse(body)
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
         console.log("Salvando Dados");
      Direct4[0] = dire.rows[0].elements[0].duration.text
      res.send(Direct4);
    } });});
    
router.get('/SaveParam/:path', function(req, res, next) {
	 const path = (req.params.path);
	 const parametros = path.split("_");
    const insert = "insert into dados.clima(datevalue ,temperatura,umidade,vento)values(?,?,?,(?,?))";
     const params = [parametros[0],parametros[1],parametros[2],parametros[3],parametros[4]];
    client.execute(insert,params,{ prepare: true }, function (err) {
        if (err) {
           	console.log("erro");
        }
        else{
            console.log("Inserido");
        }
        });
});


router.get('/SaveParamgps1/:path', function(req, res, next) {
	 const path = (req.params.path);
	 const parametros = path.split("_");
    const insert = "insert into dados.gps1(datevalue ,carro,onibus)values(?,?,?);";
     const params = [parametros[0],parametros[1],parametros[2]];
    client.execute(insert,params,{ prepare: true }, function (err) {
        if (err) {
           	console.log("erro gps1");
        }
        else{
            console.log("Inserido gps1");
        }
        });
});

router.get('/SaveParamgps2/:path', function(req, res, next) {
	 const path = (req.params.path);
	 const parametros = path.split("_");
    const insert = "insert into dados.gps2(datevalue ,carro,onibus)values(?,?,?);";
     const params = [parametros[0],parametros[1],parametros[2]];
    client.execute(insert,params,{ prepare: true }, function (err) {
        if (err) {
           	console.log("erro gps2");
        }
        else{
            console.log("Inserido gps2");
        }
        });
});

router.get('/SaveParamgps3/:path', function(req, res, next) {
	 const path = (req.params.path);
	 const parametros = path.split("_");
    const insert = "insert into dados.gps3(datevalue ,carro,onibus)values(?,?,?);";
     const params = [parametros[0],parametros[1],parametros[2]];
    client.execute(insert,params,{ prepare: true }, function (err) {
        if (err) {
           	console.log("erro gps3");
        }
        else{
            console.log("Inserido gps3");
        }
        });
});

router.get('/SaveParamgps5/:path', function(req, res, next) {
	 const path = (req.params.path);
	 const parametros = path.split("_");
    const insert = "insert into dados.gps5(datevalue ,carro,onibus)values(?,?,?);";
     const params = [parametros[0],parametros[1],parametros[2]];
    client.execute(insert,params,{ prepare: true }, function (err) {
        if (err) {
           	console.log("erro gps5");
        }
        else{
            console.log("Inserido gps5");
        }
        });
});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
module.exports = router;
