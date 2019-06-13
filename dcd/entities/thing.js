"use strict";
exports.__esModule = true;
var property_1 = require("./property");
var http = require("../helpers/http");
var Thing = /** @class */ (function () {
    function Thing(params) {
        var _this = this;
        this.thing_properties = [];
        this.thing_id = params['thing_id'];
        this.thing_token = params['thing_token'];
        this.thing_name = params['thing_name'];
        this.thing_description = params['thing_description'];
        this.thing_type = params['thing_type'];
        if (params['thing_properties'] instanceof Array) {
            params['thing_properties'].forEach(function (property) {
                if (property instanceof property_1.Property) {
                    _this.thing_properties.push(property);
                }
                else {
                    if (property.constructor === {}.constructor) {
                        _this.thing_properties.push(new property_1.Property({
                            property_id: property.id,
                            property_name: property.name,
                            property_description: property.thing_description,
                            property_type: property.type,
                            property_dimensions: property.dimensions,
                            property_values: property.values
                        }));
                    }
                }
            });
        }
    }
    Thing.prototype.read = function () {
        var _this = this;
        http.RetrieveThing(this.thing_token, this.thing_id)
            .then(function (body) {
            _this.thing_name = body.thing.name;
            _this.thing_description = body.thing.description;
            _this.thing_type = body.thing.type;
            _this.add_properties(body.thing.properties); // this has to be update_property : check if a property exist
        });
    };
    Thing.prototype.json = function () {
        return {
            id: this.thing_id,
            name: this.thing_name,
            type: this.thing_type,
            description: this.thing_description,
            properties: this.array_properties()
        };
    };
    //create a callback function
    Thing.prototype.array_properties = function () {
        //this.thing_properties.forEach
        return [];
    };
    //addproperty
    Thing.prototype.add_properties = function (properties) {
        var _this = this;
        properties.forEach(function (property) {
            if (property instanceof property_1.Property) {
                _this.thing_properties.push(property);
            }
            else {
                if (property.constructor === {}.constructor) {
                    console.log('heey');
                    _this.thing_properties.push(new property_1.Property({
                        property_id: property.id,
                        property_name: property.name,
                        property_description: property.thing_description,
                        property_type: property.type,
                        property_dimensions: property.dimensions,
                        property_values: property.values
                    }));
                }
            }
        });
    };
    return Thing;
}());
exports.Thing = Thing;
var ThingCredentials = /** @class */ (function () {
    function ThingCredentials() {
    }
    return ThingCredentials;
}());
exports.ThingCredentials = ThingCredentials;
