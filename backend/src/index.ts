import express from 'express'
import cors from 'cors'
import zakupRoute from './routes/zakup.route'
import dotenv from 'dotenv';

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/zakup', zakupRoute)

dotenv.config

const PORT = process.env.PORT || 5000


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})