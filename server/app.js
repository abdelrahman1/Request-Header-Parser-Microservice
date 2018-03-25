import express from "express"
import logger from "morgan"
import { catch404, handleError } from "./api/helpers/error"
import whoAmIrouter from "./api/routes/whoami";

/* App Init */
const app = express()

/* Middleware */

//logger
if (process.env.NODE_ENV === "dev") app.use(logger("dev"))

//routes
app.get('/',(req,res,next)=>{
  res.redirect('/api/whoami')
})

app.use('/api/whoami',whoAmIrouter)

//catch 404 && handleError
app.use(catch404, handleError)

export default app
