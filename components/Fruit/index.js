import React from 'react'

export default function Fruit({ fruit, toggleFavInFruit }) {
  return (
    <div>
      <h2>{fruit.name}</h2>
      <p>{fruit.isFav ? 'is favorite' : 'is not favorite'}</p>
      <button onClick={() => toggleFavInFruit(fruit.id)}>Toggle Fav</button>
    </div>
  )
}
