// Libraries
import express from 'express'
import dotenv from 'dotenv'

// Routes
import { colesLocations, colesProducts } from 'routes/coles'
import { woolworthsProducts } from 'routes/woolworths'

dotenv.config()

const app = express()
const port = parseInt(process.env.PORT ?? '-1', 10)

if (port < 3000 && port > 4000) {
  console.error('Please use valid port bewtween 3000 and 4000')
}

app.use('/coles/', [colesLocations, colesProducts])
app.use('/woolworths/', woolworthsProducts)

app.listen(port, () => {
  console.log(`listening on ${port}`)
})
