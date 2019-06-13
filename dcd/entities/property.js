"use strict";
exports.__esModule = true;
var Property = /** @class */ (function () {
    function Property(params) {
        this.property_dimensions = [];
        this.property_values = [];
        // if(json_property === undefined){
        this.property_id = params['property_id'];
        this.property_name = params['property_name'];
        this.property_description = params['property_description'];
        this.property_type = params['property_type'];
        this.property_dimensions = params['property_dimensions'];
        this.property_values = params['property_values'];
    }
    Property.prototype.json = function () {
        return {
            id: this.property_id,
            name: this.property_name,
            type: this.property_type,
            description: this.property_description,
            dimensions: this.property_dimensions,
            value: this.property_values
        };
    };
    Property.prototype.update_value = function (values) {
        this.property_values = values;
    };
    return Property;
}());
exports.Property = Property;
var PropertyType = /** @class */ (function () {
    function PropertyType() {
        this.ONE_DIMENSION = "1D";
        this.TWO_DIMENSIONS = "2D";
        this.THREE_DIMENSIONS = "3D";
        this.FOUR_DIMENSIONS = "4D";
        this.FIVE_DIMENSIONS = "5D";
        this.SIX_DIMENSIONS = "6D";
        this.SEVEN_DIMENSIONS = "7D";
        this.EIGHT_DIMENSIONS = "8D";
        this.NINE_DIMENSIONS = "9D";
        this.TEN_DIMENSIONS = "10D";
        this.ELEVEN_DIMENSIONS = "11D";
        this.TWELVE_DIMENSIONS = "12D";
        this.ACCELEROMETER = "ACCELEROMETER";
        this.GYROSCOPE = "GYROSCOPE";
        this.BINARY = "BINARY";
        this.MAGNETIC_FIELD = "MAGNETIC_FIELD";
        this.GRAVITY = "GRAVITY";
        this.ROTATION_VECTOR = "ROTATION_VECTOR";
        this.LIGHT = "LIGHT";
        this.LOCATION = "LOCATION";
        this.ALTITUDE = "ALTITUDE";
        this.BEARING = "BEARING";
        this.SPEED = "SPEED";
        this.PRESSURE = "PRESSURE";
        this.PROXIMITY = "PROXIMITY";
        this.RELATIVE_HUMIDITY = "RELATIVE_HUMIDITY";
        this.COUNT = "COUNT";
        this.FORCE = "FORCE";
        this.TEMPERATURE = "TEMPERATURE";
        this.STATE = "STATE";
        this.VIDEO = "VIDEO";
        this.CLASS = "CLASS";
    }
    return PropertyType;
}());
exports.PropertyType = PropertyType;
