import { Property } from './property'
export class Thing {
    thing_id: string;
    thing_name: string;
    thing_description: string;
    thing_type: string
    thing_properties: Property[] = [];

    constructor(
        thing_id:string,
        thing_name:string,
        thing_description:string,
        thing_type:string,
        thing_properties:any[],
        ) {
        this.thing_id = thing_id
        this.thing_name = thing_name
        this.thing_description = thing_description
        this.thing_type = thing_type
        
        thing_properties.forEach(property => {
            if(property instanceof Property){
                this.thing_properties.push(property)
            }else{
                this.thing_properties.push(new Property(
                    property.id,
                    property.name,
                    property.thing_description,
                    property.type,
                    property.dimensions,
                    property.values
                ))
            }
        })
    }

    update_property(properties:Property[]){
    this.thing_properties = properties
    }

}

export class ThingCredentials{
    
}
