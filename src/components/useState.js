import React, { useState } from 'react'
import propTypes from 'prop-types'

const UseStateExample = ({ itens, add, remove }) => {
  const [newTech, setNewTech] = useState('')

  return (
    <div>
      <h1>Use State</h1>
      <ul style={{ listStyle: 'none' }}>
        {itens.map((el) => (
          <>
            <li key={el}>
              {el}
              <button
                style={{ marginLeft: 10 }}
                type="button"
                onClick={() => remove(el)}
              >
                X
              </button>
            </li>
          </>
        ))}
      </ul>
      <input
        type="text"
        value={newTech}
        onChange={(ev) => setNewTech(ev.target.value)}
      />
      <button type="button" onClick={() => add(newTech)}>
        Add new Item
      </button>
    </div>
  )
}

UseStateExample.propTypes = {
  itens: propTypes.array.isRequired,
  add: propTypes.func.isRequired,
  remove: propTypes.func.isRequired,
}

export default UseStateExample
