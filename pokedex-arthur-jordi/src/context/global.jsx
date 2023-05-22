import React, { createContext, useContext, useState } from 'react'

const PokemonsContext = createContext({})


export function PokemonsProvider({children}) {
  const [selectedPokemons, setSelectedPokemons] = useState([])

  return (
    <PokemonsContext.Provider value={{selectedPokemons, setSelectedPokemons}}>
      {children}
    </PokemonsContext.Provider>
  )
}

export function usePokemons() {
  return useContext(PokemonsContext)
}