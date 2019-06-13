"use strict";
exports.__esModule = true;
var dotenv = require("dotenv");
var findconfig = require("find-config");
dotenv.config({ path: findconfig('.env') });
//_.config()
var THING_ID = process.env.THING_ID;
var THING_TOKEN = process.env.THING_TOKEN;
console.log(THING_ID);
console.log(THING_TOKEN);
