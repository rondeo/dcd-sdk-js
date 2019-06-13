import { Thing } from '../entities/thing'

import * as fetch from 'node-fetch'
  /**
 * make get request to the server to retrieve user.
 * It includes a bearer token in the request header.
 * @param url
 * @param authorization
 * @param response
 * @param next
 * @returns {Promise<>}
 */
export const makeDataRequest = (url, authorization) => fetch(
    url, {
    headers: {Authorization: 'bearer ' + authorization}
  })
    .then((res) => {
        return res.ok ? res.json() : res.text()
    })

export const RetrieveThings = (authorization:string) => fetch(
    //.env
    'https://dwd.tudelft.nl/api/things', {
    headers: {Authorization: 'bearer ' + authorization}
  })
    .then((res) => {
        return res.ok ? res.json() : res.text()
    })

export const RetrieveThing = (authorization : string,thingId : string)=>  fetch(
    //.env
    'https://dwd.tudelft.nl/api/things/'+thingId, {
    headers: {Authorization: 'bearer ' + authorization}
  })
    .then((res) => {
        return res.ok ? res.json() : res.text()
    })

export const RetrieveProperty = (authorization : string,thingId : string, propertyId: string )=>  fetch(
        //.env
        'https://dwd.tudelft.nl/api/things/'+thingId+'/properties'+'/'+propertyId, {
        headers: {Authorization: 'bearer ' + authorization}
      })
        .then((res) => {
            return res.ok ? res.json() : res.text()
        })
// le tableau doit être initialisé et vide
export function FillArrayThings(things : Thing[],authorization : string) : void{
    RetrieveThings(authorization)
    .then((body) => {
      body.things.forEach(thing => {
        RetrieveThing(authorization,thing.id)
        .then((body) => {
          things.push(new Thing({
            thing_id : body.thing.id,
            thing_name : body.thing.name,
            thing_descritpion : body.thing.description,
            thing_type : body.thing.type,
            thing_properties : body.thing.properties
          }))
        })
      });
    })
    .catch(err => console.log(err));
}

export const RetrieveUserId = (authorization:string) =>  fetch(
  //.env
  'https://dwd.tudelft.nl/userinfo', {
  headers: {Authorization: 'bearer ' + authorization}
})
  .then((res) => {
      return res.ok ? res.json() : res.text()
  })

export const RetrieveUserInfo = (authorization:string,UserId: string) =>  fetch(
  //.env
  'https://dwd.tudelft.nl/api/persons/'+UserId, {
  headers: {Authorization: 'bearer ' + authorization}
})
  .then((res) => {
      return res.ok ? res.json() : res.text()
  })
