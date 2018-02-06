'use strict';

const http = require('http');
const request = require('sync-request');

let Stocks={};

setInterval(()=>{
	
	try{
		let res = request('GET', 'http://phisix-api3.appspot.com/stocks.json');
		
		Stocks=JSON.parse(res.getBody());
		console.info('Refresh '+Stocks.as_of);
		}catch(e){
		
		console.log('Error responce:'+e);
	}
	
}, 10000)


http.createServer(function (requset, response) {
	
	response.writeHead(200, {
		'Content-Type': 'text/plain',
		'Access-Control-Allow-Origin' : '*',
		'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
	});
	
	response.end(JSON.stringify(Stocks));
	
	
}).listen(3000);

console.log('Start server 3000');

