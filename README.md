# Javascript SDK

A Javascript SDK for the Data-Centric Design Hub

## Getting Started

Install or clone the repository with `git clone`

### Step 1 : Install Node JS and Typescript

#### Node JS 
Follow the step in the followed link : https://nodejs.org/en/download/
#### TypeScript
Type in the following command
`npm install -g typescript`

### Step 2 : Node JS dependencies
- `cd dcd-sdk-js`
- `npm install`

### Step 3 Connecting a Thing to the Hub

At this stage you need the credentials of the Thing you want to connect to the hub. If you do not have one yet, please sign in/sign up to the DCD Hub and create a Thing following the instructions here.

In Atom, right click at the root of your project (left panel) and create a file ‘random-data.py’.

In this file, add the following lines to import the definition of a Thing and PropertyType from the Javascript SDK.

```ts
import {  Thing  } from '../entities/thing'
import { Property } from '../entities/property'
import { PropertyType } from '../entities/property'
```

Then, we set the credential of our Thing. In Typescript/Javascript, it means we look at the environment variables to read the id and access token of our thing. To provide these information as environment variable, right click at the root of your project (left panel) and create a file ‘.env’.

In this file, type in the following and paste your id and access token after the equal signs.

```
THING_ID=
THING_TOKEN=
```


Note: If your are using Git, you do not want to track the file ‘.env’ with Git as it contains secrets. To avoid any mistake, the file .gitignore list all files, folders and extensions to ignore. Create a file ‘.gitignore’ and add a new line with ‘.env’.

Back into our python file, we can now import our credential. We load environment variables and access our id and token as follows:


```ts
import * as dotenv from 'dotenv'
import * as findconfig from 'find-config'

// The thing ID and access token
dotenv.config({ path: findconfig('.env') })
const THING_ID = process.env.THING_ID;
const THING_TOKEN = process.env.THING_TOKEN;
```

Note: In Javascript/Typescript, any line starting with a ‘/’ is a comment, to help understand what the code does but ignored by Javascript/Typescript when running the programme.

Next, we can instantiate a Thing with the credentials, with a JSON Object. We store this object in a variable called ‘my_thing’, which we will use to manage our Thing on the DCD Hub.

```ts
//Instantiate a thing with its credential
var my_thing = new Thing({
    thing_id : THING_ID,
    thing_token : THING_TOKEN,
})
```

Notes that all the entities parameters starts with her name, here we have *thing_id* for the things id, for persons it would be *person_id* and *property_id* for properties.

The following line ‘read’ the details of our Thing, meaning it connects the DCD Hub and asks for the information related to this Thing.

```ts
//We can fetch the details of our thing
setTimeout(function(){ 
console.log(my_thing.json())
}, 3000)
```

Notes that Typescript and Javascript are synchronous so we have to make a Timeout to show data.

To create a Property for our Thing, we can use the method find_or_create_property(). This method takes a property name and a property type as parameters, search for a property of the same name in the Thing, and return the property. If no property is found, it requests the creation of a new one on the DCD Hub and returns it. In the following example, we create a property with the name ‘My Random Property’ of type ‘THREE_DIMENSIONS’, meaning that every data point will be compose of three values.