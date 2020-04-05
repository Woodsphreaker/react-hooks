import React, { useState, useEffect, useMemo, useCallback } from 'react'

const App = () => {
  const [techs, setTechs] = useState([])
  const [newTech, setNewTech] = useState('')

  const handleAdd = useCallback(() => {
    setTechs([...techs, newTech])
    setNewTech('')
  }, [newTech, techs])

  const handleRemove = (el) => {
    setTechs(techs.filter((tech) => tech !== el))
  }

  useEffect(() => {
    const storedTechs = localStorage.getItem('techs')
    if (storedTechs) {
      setTechs(JSON.parse(storedTechs))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs))
  }, [techs])

  const techSize = useMemo(() => techs.length, [techs])

  return (
    <div>
      <h1>Use State</h1>
      <ul style={{ listStyle: 'none' }}>
        {techs.map((el) => (
          <>
            <li key={el}>
              {el}
              <button
                style={{ marginLeft: 10 }}
                type="button"
                onClick={() => handleRemove(el)}
              >
                X
              </button>
            </li>
          </>
        ))}
      </ul>
      <strong>{techSize}</strong>
      <input
        type="text"
        value={newTech}
        onChange={(ev) => setNewTech(ev.target.value)}
      />
      <button type="button" onClick={handleAdd}>
        Add new Item
      </button>
      <hr />
      <h1>Use Effect</h1>
      <hr />
      <h1>Use Memo</h1>
      <hr />
      <h1>Use Callback</h1>
    </div>
  )
}

export default App
