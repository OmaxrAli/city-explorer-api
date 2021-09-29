'use strict'

const { request, response } = require('express');
const express = require('express');
const weather= require('./data/weather.json')
const server = express();


const PORT = process.env.PORT;
// get() is to handel the test rout
// server is a rout 
//localhost:3001/weather?location=<location name>
//https://city-explorer12.herokuapp.com/
server.get('/weather', (request, response)=>{

    let weatherlo= request.query.location
    let locationInfo=weather.find((value)=>
    {
        if(value.city_name === weatherlo){
            return value
        }
    })
   


    console.log(locationInfo);
    response.send(locationInfo, Forecast)
})

server.listen(PORT,()=>{
    
})