"use strict";
exports.__esModule = true;
var Property = /** @class */ (function () {
    function Property(property_id, property_name, property_description, property_type, property_dimensions, property_values) {
        this.property_dimensions = [];
        this.property_values = [];
        // if(json_property === undefined){
        this.property_id = property_id;
        this.property_name = property_name;
        this.property_description = property_description;
        this.property_type = property_type;
        this.property_dimensions = property_dimensions;
        this.property_values = property_values;
        /* }else{
             console.log('json_property')
             this.property_id = json_property['id']
             this.property_name = json_property['name']
             this.property_description = json_property['value']
             this.property_type = json_property['type']
             this.property_dimensions = json_property['dimensions']
             this.property_values = json_property['values']
         }*/
    }
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
