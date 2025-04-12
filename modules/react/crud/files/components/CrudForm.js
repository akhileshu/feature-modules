import React, { useState } from 'react'

function CrudForm() {
  const [data, setData] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Data submitted:', data)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={data} 
        onChange={(e) => setData(e.target.value)} 
        placeholder="Enter some data" 
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default CrudForm
