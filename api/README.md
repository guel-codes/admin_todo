# Node App for Todo List Backend

`npm start`
This will start the nodemon server and connect the API to the database

## Models
These models the data that will be inserted into the database

## Request.rest

This is a document that I used to test my API calls. It works with the `REST Client` extension and allows you to make individual calls to your database

## Running this yourself using Mongo
To run this yourself you will need to create a `.env` file within the root of your api directory inside you will need to create a varible called `DATABASE_CONNECTION_STRING` which you will need to pull from your local or remote mongo cluster.

 `Note:` this is also where you can create a new database by putting the name of the new db at the end of your connection string.