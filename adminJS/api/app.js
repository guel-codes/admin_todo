const AdminJS = require('adminjs')
const AdminJSExpress = require('@adminjs/express')
const express = require('express')
const mongoose = require("mongoose");
const AdminJSMongoose = require("@adminjs/mongoose");
const { todo } = require("./todoModel/todo.model.js");
// const { ShowRecord } = require("./components/showRecord.js");
require('dotenv').config()

process.env

AdminJS.registerAdapter({
  Resource: AdminJSMongoose.Resource,
  Database: AdminJSMongoose.Database,
})

const PORT = 3002

const startAdminJs = async () => {
  const app = express()
  const mongooseDB = await mongoose.connect("mongodb+srv://vscplayground:test123@cluster0.err5b9b.mongodb.net/admin_todo_app",
      {
        useNewUrlParser:true,
        useUnifiedTopology:true,
      }
    )
    .then(()=> console.log("adminjs connected to database"))
    .catch((err)=> console.log(err))

  const todoResourceOptions = {
    databases: [mongooseDB],
    resource: todo,
    options: {
      actions: {
        GetJsonData: {
          actionType: "record",
          component: AdminJS.bundle("./components/showRecord.js"),
          handler: (request, response, context) => {
            const { record, currentAdmin } = context;
            console.log("record", record);
            return {
              record: record.toJSON(currentAdmin),
              msg: "Hello world",
            };
          },
        },
      },
    }
  };

  const adminOptions = {
    databases:[],
    rootPath: "/admin",
    resources: [todoResourceOptions],
  };

  const admin = new AdminJS(adminOptions)

  //login details
  const DEFAULT_ADMIN = {
    email: 'miguel@admin.com',
    password: 'password',
  }

  // handle authentication
  const authenticate = async (email, password) => {
    //condition to check for correct login details
    if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
      //if the condition is true
      return Promise.resolve(DEFAULT_ADMIN)
    }
    //if the condition is false
    return null
  }

  const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
    admin,
    {
      authenticate,
      cookieName: "AdminJS",
      cookiePassword: "Secret",
    },
    null,
    {
      store: mongooseDB,
      resave: true,
      saveUninitialized: true,
      secret: 'Secret',
      name: 'adminjs',
    }
  
  )

  app.use(admin.options.rootPath, adminRouter)
  app.listen(PORT, () => {
    console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`)
  })
}

startAdminJs()