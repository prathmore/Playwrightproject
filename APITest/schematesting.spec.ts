/*
Prerequisites:
Install the required packages:
    npm install --save-dev playwright ajv


AJV is used for JSON Schema validation.
ajv.compile(schema) returns a validator function.
validate(data) checks if the response matches the schema.
*/

import { test, expect } from '@playwright/test';
import Ajv from 'ajv';

//1) 
test('Validate JSON response with schema1', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users/1');
    expect(response.ok()).toBeTruthy();
    const responsebody = await response.json();
    console.log(responsebody)

    // Define the JSON schema
    const schema = {
        type: 'object',
        properties: {
            id: { type: 'integer' },
            name: { type: 'string' },
            username: { type: 'string' },
            email: { type: 'string' },
        },
        required: ['id', 'name', 'username', 'email'],
        additionalProperties: true,
    };

    const ajv = new Ajv();   // Initialize Ajv
    const validate = ajv.compile(schema); //returns a validator function
    const isValid = validate(responsebody); //checks if the response matches the schema

    expect(isValid).toBeTruthy();
});



//2) 


test('Validate JSON response with schema2', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
    const responsebody = await response.json();

    // Define the JSON schema
    const schema = {
        type: 'object',
        properties: {
            userId: { type: 'integer' },
            id: { type: 'integer' },
            title: { type: 'string' },
            body: { type: 'string' },
        },
        required: ['userId', 'id', 'title', 'body'],
        additionalProperties: false,
    };

    const ajv = new Ajv();   // Initialize Ajv
    const validate = ajv.compile(schema); //returns a validator function
    const isValid = validate(responsebody); //checks if the response matches the schema

    expect(isValid).toBeTruthy();

});
