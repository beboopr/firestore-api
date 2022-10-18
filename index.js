import express from 'express'
import { createCoffee, getAllCoffess} from './src/coffees.js'

const app = express()
app.use(express.json())

app.post('/coffees', createCoffee)
app.get('/coffess', getAllCoffess)

app.listen(3030, () => console.log('listening on http://localhost:3030...'))
