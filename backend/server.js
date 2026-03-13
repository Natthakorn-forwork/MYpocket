const express = require('express')
const cors = require('cors')
const app = express();
const port = process.env.PORT || 3000

const MoneyRoutes = require('./routes/MoneyRoutes')

app.use(express.json());


app.use('/add', MoneyRoutes)


app.get('/', (req, res) => (
    res.json({ message: "api is running" })
))

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})