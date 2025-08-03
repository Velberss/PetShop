const express = require('express')
const cors = require('cors')
const { calcularPrecos } = require('./petshops')
const { isWeekend } = require('./utils')

const app = express()
const port = 3000

app.use(cors())

app.get('/melhor-petshop', (req, res) => {
  const { data, pequenos, grandes } = req.query

  if (!data || isNaN(pequenos) || isNaN(grandes)) {
    return res.status(400).json({ erro: 'Parâmetros inválidos.' })
  }

  const fimDeSemana = isWeekend(data)
  const melhor = calcularPrecos(parseInt(pequenos), parseInt(grandes), fimDeSemana)

  res.json({
    petshop: melhor.nome,
    precoTotal: melhor.preco.toFixed(2)
  })
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})
