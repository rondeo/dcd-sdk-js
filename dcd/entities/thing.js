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
            _this.update_properties(_this.array_to_properties(body.thing.properties)); // this has to be update_property : check if a property exist
        });
    };
    Thing.prototype.json = function () {
        return {
            id: this.thing_id,
            name: this.thing_name,
            type: this.thing_type,
            description: this.thing_description,
            properties: this.properties_to_array()
        };
    };
    //create a callback function
    Thing.prototype.properties_to_array = function () {
        var res = [];
        for (var i = 0; i <= this.thing_properties.length; i++) {
            if (i < this.thing_properties.length) {
                var property = this.thing_properties[i];
                res.push(property.json());
            }
            else {
                return res;
            }
        }
    };
    Thing.prototype.array_to_properties = function (array) {
        var res = [];
        for (var i = 0; i <= array.length; i++) {
            if (i < array.length) {
                var property = array[i];
                if (property.constructor === {}.constructor) {
                    res.push(new property_1.Property({
                        property_id: property.id,
                        property_name: property.name,
                        property_description: property.description,
                        property_type: property.type,
                        property_dimensions: property.dimensions,
                        property_values: property.values
                    }));
                }
            }
            else {
                return res;
            }
        }
    };
    Thing.prototype.update_properties = function (properties) {
        var _this = this;
        properties.forEach(function (property) {
            if (!_this.contains(property.property_id)) {
                _this.thing_properties.push(property);
            }
            else {
                console.log(property.property_id, 'already there 1');
            }
        });
    };
    Thing.prototype.contains = function (property_id) {
        var res = false;
        for (var i = 0; i <= this.thing_properties.length; i++) {
            if (i < this.thing_properties.length) {
                if (property_id == this.thing_properties[i].property_id) {
                    res = true;
                }
            }
            else {
                return res;
            }
        }
    };
    return Thing;
}());
exports.Thing = Thing;
