"use strict";
exports.__esModule = true;
var thing_1 = require("../entities/thing");
var fetch = require("node-fetch");
/**
* make get request to the server to retrieve user.
* It includes a bearer token in the request header.
* @param url
* @param authorization
* @param response
* @param next
* @returns {Promise<>}
*/
exports.makeDataRequest = function (url, authorization) { return fetch(url, {
    headers: { Authorization: 'bearer ' + authorization }
})
    .then(function (res) {
    return res.ok ? res.json() : res.text();
}); };
exports.RetrieveThings = function (authorization) { return fetch(
//.env
'https://dwd.tudelft.nl/api/things', {
    headers: { Authorization: 'bearer ' + authorization }
})
    .then(function (res) {
    return res.ok ? res.json() : res.text();
}); };
exports.RetrieveThing = function (authorization, thingId) { return fetch(
//.env
'https://dwd.tudelft.nl/api/things/' + thingId, {
    headers: { Authorization: 'bearer ' + authorization }
})
    .then(function (res) {
    return res.ok ? res.json() : res.text();
}); };
exports.RetrieveProperty = function (authorization, thingId, propertyId) { return fetch(
//.env
'https://dwd.tudelft.nl/api/things/' + thingId + '/properties' + '/' + propertyId, {
    headers: { Authorization: 'bearer ' + authorization }
})
    .then(function (res) {
    return res.ok ? res.json() : res.text();
}); };
// le tableau doit être initialisé et vide
function FillArrayThings(things, authorization) {
    exports.RetrieveThings(authorization)
        .then(function (body) {
        body.things.forEach(function (thing) {
            exports.RetrieveThing(authorization, thing.id)
                .then(function (body) {
                things.push(new thing_1.Thing({
                    thing_id: body.thing.id,
                    thing_name: body.thing.name,
                    thing_descritpion: body.thing.description,
                    thing_type: body.thing.type,
                    thing_properties: body.thing.properties
                }));
                /*things.push(new Thing(
                  body.thing.id,
                  body.thing.name,
                  body.thing.description,
                  body.thing.type,
                  body.thing.properties
                ))*/
            });
        });
    })["catch"](function (err) { return console.log(err); });
}
exports.FillArrayThings = FillArrayThings;
exports.RetrieveUserId = function (authorization) { return fetch(
//.env
'https://dwd.tudelft.nl/userinfo', {
    headers: { Authorization: 'bearer ' + authorization }
})
    .then(function (res) {
    return res.ok ? res.json() : res.text();
}); };
exports.RetrieveUserInfo = function (authorization, UserId) { return fetch(
//.env
'https://dwd.tudelft.nl/api/persons/' + UserId, {
    headers: { Authorization: 'bearer ' + authorization }
})
    .then(function (res) {
    return res.ok ? res.json() : res.text();
}); };
