import { useState } from 'react'
import { FaDog, FaCalendarAlt, FaSearch } from 'react-icons/fa'

function validarEntrada(data, pequenos, grandes) {
  const regexData = /^\d{2}\/\d{2}\/\d{4}$/
  if (!regexData.test(data)) {
    return 'A data deve estar no formato DD/MM/AAAA.'
  }

  if (isNaN(pequenos) || pequenos < 0) {
    return 'Informe uma quantidade válida de cães pequenos.'
  }

  if (isNaN(grandes) || grandes < 0) {
    return 'Informe uma quantidade válida de cães grandes.'
  }

  return null
}

function App() {
  const [data, setData] = useState('')
  const [pequenos, setPequenos] = useState('')
  const [grandes, setGrandes] = useState('')
  const [resultado, setResultado] = useState(null)
  const [erro, setErro] = useState(null)

  const buscarPetshop = async () => {
    const erroValidacao = validarEntrada(data, pequenos, grandes)
    if (erroValidacao) {
      setErro(erroValidacao)
      setResultado(null)
      return
    }

    try {
      const url = `http://localhost:3000/melhor-petshop?data=${data}&pequenos=${pequenos}&grandes=${grandes}`
      const response = await fetch(url)

      if (!response.ok) {
        const json = await response.json()
        throw new Error(json.erro || 'Erro na requisição')
      }

      const json = await response.json()
      setResultado(json)
      setErro(null)
    } catch (err) {
      setErro(err.message)
      setResultado(null)
    }
  }

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#1e1e1e',
      fontFamily: 'Segoe UI, sans-serif',
      color: '#fff',
      padding: 20
    }}>
      <div style={{
        width: '100%',
        maxWidth: 420,
        background: '#2b2b2b',
        padding: 30,
        borderRadius: '1rem',
        boxShadow: '0 0 10px #00000055'
      }}>
        <h1 style={{ fontSize: '1.8rem', marginBottom: 20 }}>Melhor Petshop</h1>

        <label>
          <FaCalendarAlt style={{ marginRight: 8 }} />
          Data (DD/MM/AAAA):
        </label>
        <input
          type="text"
          placeholder="01/08/2025"
          value={data}
          onChange={(e) => setData(e.target.value)}
          style={inputStyle}
        />

        <label>
          <FaDog style={{ marginRight: 8 }} />
          Cães pequenos:
        </label>
        <input
          type="number"
          value={pequenos}
          onChange={(e) => setPequenos(e.target.value)}
          style={inputStyle}
        />

        <label>
          <FaDog style={{ marginRight: 8 }} />
          Cães grandes:
        </label>
        <input
          type="number"
          value={grandes}
          onChange={(e) => setGrandes(e.target.value)}
          style={inputStyle}
        />

        <button onClick={buscarPetshop} style={buttonStyle}>
          <FaSearch style={{ marginRight: 8 }} />
          Buscar Petshop
        </button>

        {erro && (
          <p style={{ color: '#ff5555', marginTop: 15 }}>{erro}</p>
        )}

        {resultado && (
          <div style={{
            background: '#111',
            padding: 15,
            borderRadius: 8,
            marginTop: 20,
            border: '1px solid #333'
          }}>
            <h2>Resultado</h2>
            <p><strong>Petshop:</strong> {resultado.petshop}</p>
            <p><strong>Preço total:</strong> R$ {resultado.precoTotal}</p>
          </div>
        )}
      </div>
    </div>
  )
}

const inputStyle = {
  width: '100%',
  padding: '10px',
  margin: '8px 0 16px',
  borderRadius: 6,
  border: '1px solid #444',
  backgroundColor: '#3a3a3a',
  color: '#fff',
  fontSize: '1rem'
}

const buttonStyle = {
  width: '100%',
  padding: '12px',
  borderRadius: 8,
  backgroundColor: '#00c17c',
  border: 'none',
  color: '#fff',
  fontSize: '1rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

export default App
