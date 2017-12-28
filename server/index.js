const express = require('express')
const app = express()

const path = require('path')
const port = process.env.PORT || 3000

app.get('*', (req, resp) => {
  resp.sendFile(path.resolve(__dirname, '../src/index.html'))
})

app.listen(port, () => {
  console.log('listening on port', port)
})