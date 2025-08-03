function calcularPrecos(qtdPequenos, qtdGrandes, isFimDeSemana) {
  const petshops = [
    {
      nome: 'Meu Canino Feliz',
      distancia: 2.0,
      preco: isFimDeSemana
        ? (qtdPequenos * 24 + qtdGrandes * 48)
        : (qtdPequenos * 20 + qtdGrandes * 40)
    },
    {
      nome: 'Vai Rex',
      distancia: 1.7,
      preco: isFimDeSemana
        ? (qtdPequenos * 20 + qtdGrandes * 55)
        : (qtdPequenos * 15 + qtdGrandes * 50)
    },
    {
      nome: 'ChowChawgas',
      distancia: 0.8,
      preco: (qtdPequenos * 30 + qtdGrandes * 45)
    }
  ]

  petshops.sort((a, b) => {
    if (a.preco !== b.preco) return a.preco - b.preco
    return a.distancia - b.distancia
  })

  return petshops[0]
}

module.exports = { calcularPrecos }
