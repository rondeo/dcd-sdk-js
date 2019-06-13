"use strict";
exports.__esModule = true;
//import {  Thing  } from '../entities/thing'
var thing_1 = require("../entities/thing");
var dotenv = require("dotenv");
var findconfig = require("find-config");
// The thing ID and access token
dotenv.config({ path: findconfig('.env') });
var THING_ID = process.env.THING_ID;
var THING_TOKEN = process.env.THING_TOKEN;
//var my_thing = new Thing(THING_ID,THING_TOKEN,undefined,undefined,undefined,undefined)
var my_thing = new thing_1.Thing({
    thing_id: THING_ID,
    thing_token: THING_TOKEN
});
my_thing.read();
setTimeout(function () {
    console.log(my_thing.json());
}, 3000);
