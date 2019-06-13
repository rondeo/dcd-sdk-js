"use strict";
exports.__esModule = true;
var Property = /** @class */ (function () {
    function Property(params) {
        this.property_dimensions = [];
        this.property_values = [];
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
var PropertyType;
(function (PropertyType) {
    PropertyType["ONE_DIMENSION"] = "1D";
    PropertyType["TWO_DIMENSIONS"] = "2D";
    PropertyType["THREE_DIMENSIONS"] = "3D";
    PropertyType["FOUR_DIMENSIONS"] = "4D";
    PropertyType["FIVE_DIMENSIONS"] = "5D";
    PropertyType["SIX_DIMENSIONS"] = "6D";
    PropertyType["SEVEN_DIMENSIONS"] = "7D";
    PropertyType["EIGHT_DIMENSIONS"] = "8D";
    PropertyType["NINE_DIMENSIONS"] = "9D";
    PropertyType["TEN_DIMENSIONS"] = "10D";
    PropertyType["ELEVEN_DIMENSIONS"] = "11D";
    PropertyType["TWELVE_DIMENSIONS"] = "12D";
    PropertyType["ACCELEROMETER"] = "ACCELEROMETER";
    PropertyType["GYROSCOPE"] = "GYROSCOPE";
    PropertyType["BINARY"] = "BINARY";
    PropertyType["MAGNETIC_FIELD"] = "MAGNETIC_FIELD";
    PropertyType["GRAVITY"] = "GRAVITY";
    PropertyType["ROTATION_VECTOR"] = "ROTATION_VECTOR";
    PropertyType["LIGHT"] = "LIGHT";
    PropertyType["LOCATION"] = "LOCATION";
    PropertyType["ALTITUDE"] = "ALTITUDE";
    PropertyType["BEARING"] = "BEARING";
    PropertyType["SPEED"] = "SPEED";
    PropertyType["PRESSURE"] = "PRESSURE";
    PropertyType["PROXIMITY"] = "PROXIMITY";
    PropertyType["RELATIVE_HUMIDITY"] = "RELATIVE_HUMIDITY";
    PropertyType["COUNT"] = "COUNT";
    PropertyType["FORCE"] = "FORCE";
    PropertyType["TEMPERATURE"] = "TEMPERATURE";
    PropertyType["STATE"] = "STATE";
    PropertyType["VIDEO"] = "VIDEO";
    PropertyType["CLASS"] = "CLASS";
})(PropertyType = exports.PropertyType || (exports.PropertyType = {}));
