const express = require('express')
const path = require('path')

const PORT = process.env.PORT || 3001

const app = express()
app.use(express.json())

let song = {
  title: '',
  image: '',
  description: ''
}

app.get('/api/song', (req, res) => {
  res.json({ song: song })
})

app.post('/api/song', (req, res) => {
  song = req.body.song

  res.json({})
})


app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})

