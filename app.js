const express = require('express')
const app = express()
const router = require('./routes/index')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const port = process.env.PORT || 3000

app.use(express.json())
// app.use(auth, assets, wakaf, funds, payments)
app.use(router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
