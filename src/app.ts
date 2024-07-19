import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import routes from './routes'

import dotenv from 'dotenv';

import nunjucks from "nunjucks"
import { server } from 'typescript';


dotenv.config();

class App {
  public express: express.Application

  public constructor() {
    this.express = express()
    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares(): void {
    nunjucks.configure("src/views", {
      express: this.express,
      noCache: true
    })
    this.express.use(express.static("public"))
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database(): void {
    const url: string | undefined = process.env.MONGOURL
    if(!url){
      return console.log("No database url was provided")
    }
    mongoose.connect(url)
    console.log("🏦 Connected to the database")
  }

  private routes(): void {
    this.express.use(routes)
  }
}

export default new App().express