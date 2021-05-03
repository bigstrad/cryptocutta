const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// Body parser
app.use(express.json())

// Eventually add limiting https://www.npmjs.com/package/express-limiter
// ...

// Routes
app.use("/api/v1", require("./routes/api-crypto")); 

// Root endpoint
app.get('/', (request, response) => {
    response.json({ msg: "Api available @ /v1/api" })
})

// Listen
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})