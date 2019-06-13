"use strict";
exports.__esModule = true;
//import {  Thing  } from '../entities/thing'
var thing_1 = require("../entities/thing");
var property_1 = require("../entities/property");
var property_2 = require("../entities/property");
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
my_thing.update_properties([new property_1.Property({ property_id: 'blablabla', property_type: property_2.PropertyType.ALTITUDE })]);
setTimeout(function () {
    console.log(my_thing.json());
}, 3000);
