"use strict";
exports.__esModule = true;
var property_1 = require("./property");
var Thing = /** @class */ (function () {
    function Thing(thing_id, thing_name, thing_description, thing_type, thing_properties) {
        var _this = this;
        this.thing_properties = [];
        this.thing_id = thing_id;
        this.thing_name = thing_name;
        this.thing_description = thing_description;
        this.thing_type = thing_type;
        thing_properties.forEach(function (property) {
            if (property instanceof property_1.Property) {
                _this.thing_properties.push(property);
            }
            else {
                _this.thing_properties.push(new property_1.Property(property.id, property.name, property.thing_description, property.type, property.dimensions, property.values));
            }
        });
    }
    Thing.prototype.update_property = function (properties) {
        this.thing_properties = properties;
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
