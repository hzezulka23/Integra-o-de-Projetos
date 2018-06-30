				
//MAIN FUNCTION					
function SendToIndexjs (url,fn){
	$(document).ready(function() {
		   		$.ajax({ 
            		url: url
           		 }).then(function(data) {
	              fn(data);              });
});
}



function ParamBlumenau() {
	var param = "/Blumenau";
	SendToIndexjs(param,function(data) {
		document.getElementById('bnut').innerHTML = data[0];
		document.getElementById('bnuh').innerHTML = data[1];
		document.getElementById('bnus').innerHTML = data[2];	
		document.getElementById('bnud').innerHTML = data[3];			
	});	
}
function ParamItajai() {
	var param = "/Itajai";
	SendToIndexjs(param,function(data) {
		document.getElementById('itjt').innerHTML = data[0];
		document.getElementById('itjh').innerHTML = data[1];
		document.getElementById('itjs').innerHTML = data[2];	
		document.getElementById('itjd').innerHTML = data[3];			
	});	
}
function ParamNavegantes() {
	var param = "/Navegantes";
	SendToIndexjs(param,function(data) {
		document.getElementById('nvgt').innerHTML = data[0];
		document.getElementById('nvgh').innerHTML = data[1];
		document.getElementById('nvgs').innerHTML = data[2];	
		document.getElementById('nvgd').innerHTML = data[3];			
	});	
}
function Direct_to_Vila() {
	var param = "/Directions_to_Vila";
	SendToIndexjs(param,function(data) {
	document.getElementById('car').innerHTML = data[0];
	document.getElementById('bus').innerHTML = data[1];
	ParamBlumenau1(data[0],data[1]);			
	});	
}
function Direct_to_UFSC() {
	var param = "/Directions_to_UFSC";
	SendToIndexjs(param,function(data) {
document.getElementById('car').innerHTML = data[0];
	document.getElementById('bus').innerHTML = data[1];
	ParamBlumenau0(data[0],data[1]);			
	});	
}
function Direct_to_Prefeitura() {
	var param = "/Directions_to_Prefeitura";
	SendToIndexjs(param,function(data) {
	document.getElementById('car').innerHTML = data[0];
	document.getElementById('bus').innerHTML = data[1];	
	ParamBlumenau2(data[0],data[1]);			
	});	
}
function Direct_to_Naveg() {
	var param = "/Directions_to_Navegantes";
	SendToIndexjs(param,function(data) {
	document.getElementById('car').innerHTML = data[0];
	document.getElementById('bus').innerHTML = "UBER"	
	ParamBlumenau3(data[0],data[1]);			
	});	
}

function RealTime() {
	var today = new Date();
	today = String(today);
	today = today.replace(" GMT-0000 (-0)","");
	today = today.replace(/\D/g,'');
	var k = today[6]+today[7];
	k = String(k);		
	var Time = ['2018','-','07','-',today[0]+today[1]," ",k,':',today[8]+today[9],':',+today[10]+today[11]];
	Time = Time.join("");
	return Time
	
}


function Save_Param_Itajai(temp,hum,spd,dire) {
	var Time = RealTime();
	
	var param = ["/SaveParam/",Time,"_",temp,"_",hum,"_",spd,"_",dire];
param = param.join("");
	SendToIndexjs(param,function(data) {	
	});	
}

function Get_Input() {
var Input = (document.getElementById("text").value);
	if((Input=="Navegantes")||(Input=="navegantes")){
		Direct_to_Naveg();
		}
	else if((Input=="UFSC")||(Input=="ufsc")||(Input=="Ufsc")){
		Direct_to_UFSC();
		}
	else if((Input=="Prefeitura")||(Input=="prefeitura")){
		Direct_to_Prefeitura();
		}
	else if((Input=="Vila Germânica")||(Input=="vila germânica")||(Input=="vila germanica")||(Input=="Vila Germanica")){
		Direct_to_Vila();
		}	
	else {
		alert("Cidade não consta no nosso banco de dados");	
}	
}
	
function ParamBlumenau0(car,bus) {
	var Time = RealTime();
var param = ["/SaveParamgps1/",Time,"_",car,"_",bus];
param = param.join("");
	SendToIndexjs(param,function(data) {	
	});	
}	

function ParamBlumenau1(car,bus) {
	var Time = RealTime();
var param = ["/SaveParamgps2/",Time,"_",car,"_",bus];
param = param.join("");
	SendToIndexjs(param,function(data) {	
	});	
}
function ParamBlumenau2(car,bus) {
	var Time = RealTime();
var param = ["/SaveParamgps3/",Time,"_",car,"_",bus];
param = param.join("");
	SendToIndexjs(param,function(data) {	
	});	
}

function ParamBlumenau3(car,bus) {
	var Time = RealTime();
var param = ["/SaveParamgps5/",Time,"_",car,"_",bus];
param = param.join("");
	SendToIndexjs(param,function(data) {	
	});	
}