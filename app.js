
const PORT = process.env.PORT || "8087"
const express = require('express')
//#const { countAllRequests } = require('monitoring');
const app = express();
const api = require('@opentelemetry/api')
app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(parseInt(PORT,10), () => {
    console.log(`Listening for requests on http://localhost:${PORT}`)
})
