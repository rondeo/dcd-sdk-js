import {  Thing  } from '../entities/thing'
import { Property } from '../entities/property'
import * as dotenv from 'dotenv'
import * as findconfig from 'find-config'


// The thing ID and access token
dotenv.config({ path: findconfig('.env') })
const THING_ID = process.env.THING_ID;
const THING_TOKEN = process.env.THING_TOKEN;

