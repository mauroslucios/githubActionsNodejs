const express = require('express')
const app = express()
const PORT = 3001


app.get('/',(req,res)=>{
    res.send('<h1>Github Actions</h1>')
})

app.listen(PORT,()=>{
    console.log(`App listening on http://localhost:${PORT}`)
})

