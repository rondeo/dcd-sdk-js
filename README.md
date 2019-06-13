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
`cd dcd-sdk-js`
`npm install`

### Step 3 Connecting a Thing to the Hub

At this stage you need the credentials of the Thing you want to connect to the hub. If you do not have one yet, please sign in/sign up to the DCD Hub and create a Thing following the instructions here.

In Atom, right click at the root of your project (left panel) and create a file ‘random-data.py’.

In this file, add the following lines to import the definition of a Thing and PropertyType from the Javascript SDK.

```ts
import {  Thing  } from '../entities/thing'
import { Property } from '../entities/property'
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