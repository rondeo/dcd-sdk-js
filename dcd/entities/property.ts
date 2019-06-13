export class Property {
    property_id: string;
    property_name: string;
    property_description: string;
    property_type: string;
    property_dimensions: any[] = [];
    property_values: any[] = [];

    constructor(
        property_id:string,
        property_name:string,
        property_description:string,
        property_type: string,
        property_dimensions: any[],
        property_values: any[],
        //json_property:{},
        ) {
       // if(json_property === undefined){
            this.property_id = property_id
            this.property_name = property_name
            this.property_description = property_description
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

    update_value(values:any[]){
        this.property_values = values
    }

}

export class PropertyType{
    ONE_DIMENSION = "1D"
    TWO_DIMENSIONS = "2D"
    THREE_DIMENSIONS = "3D"
    FOUR_DIMENSIONS = "4D"
    FIVE_DIMENSIONS = "5D"
    SIX_DIMENSIONS = "6D"
    SEVEN_DIMENSIONS = "7D"
    EIGHT_DIMENSIONS = "8D"
    NINE_DIMENSIONS = "9D"
    TEN_DIMENSIONS = "10D"
    ELEVEN_DIMENSIONS = "11D"
    TWELVE_DIMENSIONS = "12D"
    ACCELEROMETER = "ACCELEROMETER"
    GYROSCOPE = "GYROSCOPE"
    BINARY = "BINARY"
    MAGNETIC_FIELD = "MAGNETIC_FIELD"
    GRAVITY = "GRAVITY"
    ROTATION_VECTOR = "ROTATION_VECTOR"
    LIGHT = "LIGHT"
    LOCATION = "LOCATION"
    ALTITUDE = "ALTITUDE"
    BEARING = "BEARING"
    SPEED = "SPEED"
    PRESSURE = "PRESSURE"
    PROXIMITY = "PROXIMITY"
    RELATIVE_HUMIDITY = "RELATIVE_HUMIDITY"
    COUNT = "COUNT"
    FORCE = "FORCE"
    TEMPERATURE = "TEMPERATURE"
    STATE = "STATE"
    VIDEO = "VIDEO"
    CLASS = "CLASS"
}
