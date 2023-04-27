import '@/styles/globals.css'
import { useState } from 'react'

const initalValue = [
  { name: 'Mango', isFav: true, id: 0 },
  { name: 'Banane', isFav: false, id: 1 },
  { name: 'Kiwi', isFav: false, id: 2 },
  { name: 'Ananas', isFav: false, id: 3 },
  {
    name: 'Apfel',
    isFav: false,
    id: 4,
  },
]

export default function App({ Component, pageProps }) {
  const [fruits, setFruits] = useState(initalValue)

  const [customers, setCustomers] = useState([])

  function saveNewCustomer(newCustomerData) {
    //{name: "Martin", nachname: "Pagels", alter: 18}
    setCustomers([...customers, newCustomerData])
  }

  function toggleFavInFruit(id) {
    const updatedFruits = fruits.map((fruits) => {
      if (fruits.id === id) {
        return { ...fruits, isFav: !fruits.isFav }
      } else return fruits
    })
    setFruits(updatedFruits)
  }

  console.log(customers)
  return (
    <Component
      {...pageProps}
      fruits={fruits}
      toggleFavInFruit={toggleFavInFruit}
      saveNewCustomer={saveNewCustomer}
    />
  )
}
