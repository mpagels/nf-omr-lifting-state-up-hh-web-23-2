import React, { useState } from 'react'

// {name: "Martin", nachname: "Pagels", alter: 18}

export default function CustomerInput({ saveNewCustomer }) {
  const [name, setName] = useState('')
  const [nachName, setNachName] = useState('')
  const [age, setAge] = useState(0)

  function handleClick() {
    saveNewCustomer({ name, nachName, age })
  }

  console.log(name, nachName, age)

  return (
    <div>
      <label>Name</label>
      <input
        onChange={(event) => setName(event.target.value)}
        value={name}
      ></input>
      <label>Nachname</label>
      <input
        onChange={(event) => setNachName(event.target.value)}
        value={nachName}
      ></input>
      <label>alter</label>
      <input
        type="number"
        value={age}
        onChange={(event) => setAge(Number(event.target.value))}
      ></input>
      <button onClick={handleClick}>Speicher customer</button>
    </div>
  )
}
