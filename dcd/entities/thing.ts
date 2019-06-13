import { Property } from './property'
import  * as http from '../helpers/http'
import { throwStatement } from 'babel-types';
interface IThing {
    thing_id : string;
    thing_token : string
}
export class Thing implements IThing {
    thing_id: string;
    thing_token: string;
    thing_name: string;
    thing_description: string;
    thing_type: string
    thing_properties: Property[] = [];

    constructor(params : {}) {
        this.thing_id = params['thing_id']
        this.thing_token = params['thing_token']
        this.thing_name = params['thing_name']
        this.thing_description = params['thing_description']
        this.thing_type = params['thing_type']
        
        if(params['thing_properties'] instanceof Array){
            params['thing_properties'].forEach(property => {
                if(property instanceof Property){
                    this.thing_properties.push(property)
                }else{
                    if(property.constructor === {}.constructor){
                        this.thing_properties.push(new Property({
                            property_id :property.id,
                            property_name : property.name,
                            property_description : property.thing_description,
                            property_type : property.type,
                            property_dimensions : property.dimensions,
                            property_values : property.values
                        }
                        ))
                    }
                }
            })
        }
    }

    read(){
        http.RetrieveThing(this.thing_token,this.thing_id)
        .then((body) => {
            this.thing_name = body.thing.name
            this.thing_description = body.thing.description
            this.thing_type =  body.thing.type
            this.add_properties(body.thing.properties) // this has to be update_property : check if a property exist
        })
    }
    json(){
    return {
        id : this.thing_id,
        name : this.thing_name,
        type : this.thing_type,
        description: this.thing_description,
        properties : this.array_properties()
    }
    }

    //create a callback function
    array_properties():Array<any>{
        //this.thing_properties.forEach
        return []
    }

    //addproperty
    add_properties(properties:Array<any>){
        properties.forEach(property => {
            if(property instanceof Property){
                this.thing_properties.push(property)
            }else{
                if(property.constructor === {}.constructor){
                    this.thing_properties.push(new Property({
                        property_id :property.id,
                        property_name : property.name,
                        property_description : property.thing_description,
                        property_type : property.type,
                        property_dimensions : property.dimensions,
                        property_values : property.values
                    }
                    ))
                }
            }
        })
    }

}

export class ThingCredentials{
    
}