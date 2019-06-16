import { Property } from './property'
import { PropertyType } from '../entities/property'
import  * as http from '../helpers/http'

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
        if(params === undefined){
            throw new TypeError('Thing : constructor param is undefined')
        }else{
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
                            property_id :property['id'],
                            property_name : property['name'],
                            property_description : property['description'],
                            property_type : property['type'],
                            property_dimensions : property['dimensions'],
                            property_values : property['values']
                        }
                        ))
                    }
                }
            })
        }
    }
    }

    read(){
        //const data = http.GetThing(this.thing_token,this.thing_id)
        //console.log(data)
       http.RetrieveThing(this.thing_token,this.thing_id)
        .then((body) => {
            if(body.thing === undefined){
                throw new TypeError('body is undifined : no thing found, check if the id and token of your thing are valid')
            }else{
                this.thing_name = body.thing['name']
                this.thing_description = body.thing['description']
                this.thing_type =  body.thing['type']
                this.update_properties(this.array_to_properties(body.thing.properties)) // this has to be update_property : check if a property exist
            }
        })
        .catch((error) => {
           throw error
        });

    }

    json(){
        return {
        id : this.thing_id,
        name : this.thing_name,
        type : this.thing_type,
        description: this.thing_description,
        properties : this.properties_to_array()
        }
    }

    find_or_create_property(property_name:string,property_type:PropertyType):Property{
        if(this.find_property_by_name(property_name) == undefined){
            console.log('function')
            //run an other function => create in the hub and update when it's done
            return new Property({
                property_id :   undefined,
                property_name : property_name,
                property_description : undefined,
                property_type : property_type,
                property_dimensions : undefined,
                property_values : undefined
            })
        }else{
            return this.find_property_by_name(property_name)
        }
    }

    private properties_to_array():Array<any>{
        var res = []
        for (var i = 0; i <= this.thing_properties.length; i ++) {
            if(i < this.thing_properties.length){
                const property = this.thing_properties[i]
                res.push(property.json())
            }else{
                return res
            }
          }
    }

    private array_to_properties(array:Array<any>):Array<Property>{
        var res = []
        for (var i = 0; i <= array.length; i ++) {
            if(i < array.length){
                const property = array[i]
                if(property.constructor === {}.constructor){
                res.push(new Property({
                    property_id :   property.id,
                    property_name : property.name,
                    property_description : property.description,
                    property_type : property.type,
                    property_dimensions : property.dimensions,
                    property_values : property.values
                }))
                }
           }else{
            return res
            }
        }
    }


    private update_properties(properties:Array<Property>){
        properties.forEach(property => {
                    if(!this.contains(property.property_id)){
                        this.thing_properties.push(property)
                    }else{
                        console.log(property.property_id,'already there')
                    }
        })
    }

    private contains(property_id:string):boolean{
        for (var i = 0; i <= this.thing_properties.length; i ++) {
            if(i < this.thing_properties.length){
                if(property_id == this.thing_properties[i].property_id){
                    return true
                }
            }else{
                return false
            }
          }
    }

    private find_property_by_name(property_name:string): Property{
        var res : Property;
        for (var i = 0; i <= this.thing_properties.length; i ++) {
            if(i < this.thing_properties.length){
                if(property_name == this.thing_properties[i].property_name){
                    //res = this.thing_properties[i]
                    return this.thing_properties[i]
                }
            }else{
                return res
            }
          }
    }
}


//TODO : throw les erreurs à la construction.