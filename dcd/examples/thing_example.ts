//import {  Thing  } from '../entities/thing'
import {  Thing  } from '../entities/thing'
import { Property } from '../entities/property'
import { PropertyType } from '../entities/property'
import * as dotenv from 'dotenv'
import * as findconfig from 'find-config'


// The thing ID and access token
dotenv.config({ path: findconfig('.env') })
const THING_ID = process.env.THING_ID;
const THING_TOKEN = process.env.THING_TOKEN;

//var my_thing = new Thing(THING_ID,THING_TOKEN,undefined,undefined,undefined,undefined)

var my_thing = new Thing({
    thing_id : THING_ID,
    thing_token : THING_TOKEN,
})

my_thing.read()
setTimeout(function(){ 
    console.log(my_thing.json())
}, 3000)
