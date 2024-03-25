import express from 'express'
import dotenv from 'dotenv'
import db from './config/connection.js'
import path from 'path'


dotenv.config()

const app = express()
const PORT = process.env.PORT || 3333

async function startServer(){
    app.use(express.json())

    if (process.env.NODE_ENV !== 'production') {
        app.use(express.static('../client/dist'))
    
        app.get('*', (req, res) => {
          res.sendFile(path.join(__dirname, '../client/dist/index.html'))
        })
      }

        // Confirm DB connection
  db.on('open', () => {
    // Start the server
    app.listen(PORT, () => console.log(`Engines started on port ${PORT}! \n http://localhost:${PORT}/`))
  })
}

startServer()