const express = require('express')

const PORT = process.env.PORT || 3001

const app = express()
app.use(express.json())

let song = {
  title: 'Panic! At The Disco - Lying Is the Most Fun a Girl Can Have Without Taking Her Clothes Off',
  image: 'https://media.discordapp.net/attachments/747889238275784758/867721494012755988/qi170319_01.png',
  description: 'Larry Heard (born May 31, 1960) is an American DJ, record producer and musician who has recorded solo under various names, most notably Mr. Fingers.'
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

