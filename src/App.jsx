import { useState } from 'react'
import './index.css'
import Starter from './components/Starter'

import CurrentTeam from './components/CurrentTeam'
import SelectTeam from './components/SelectTeam'

function App() {
  const [startApp, setStartApp] = useState(true)
  const [team, setTeam] = useState([])
  const [randPokemon, setRandPokemon] = useState([])
  const [isRandShowing, setisRandShowing] = useState(false)
  const [showStats, setShowStats] = useState(false)
  const [teamFull, setTeamFull] = useState(false)

  async function choosePokemon(id){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await response.json()
    let teamArray = [data]
    console.log(teamArray)
    if (id === 1 || id === 4 || id === 7){
    setTeam(()=> {
        return teamArray.map( (pokemon) => {
          return {
                id: pokemon.id,
                name: pokemon.name,
                stats: {
                  weight: pokemon.weight,
                  hp: pokemon.stats[0].base_stat,
                  attack: pokemon.stats[1].base_stat,
                  defense: pokemon.stats[2].base_stat,
                  special_attack: pokemon.stats[3].base_stat,
                  special_defense: pokemon.stats[4].base_stat,
                  speed: pokemon.stats[5].base_stat,
                  },
                img: pokemon.sprites.front_default,
                }
              })
            })
        }

    else {
      setRandPokemon(()=> {
        return teamArray.map( (pokemon) => {
          return {
                id: pokemon.id,
                name: pokemon.name,
                stats: {
                  weight: pokemon.weight,
                  hp: pokemon.stats[0].base_stat,
                  attack: pokemon.stats[1].base_stat,
                  defense: pokemon.stats[2].base_stat,
                  special_attack: pokemon.stats[3].base_stat,
                  special_defense: pokemon.stats[4].base_stat,
                  speed: pokemon.stats[5].base_stat,
                  },
                img: pokemon.sprites.front_default,
                }
              })
            })
        }
}

function handleStart(id){
      setStartApp(false)
      choosePokemon(id)
}

const getRandNum = () => Math.floor(Math.random() * 151) + 1
const randNum = getRandNum()
function handleRandPokemon(randNum){
    choosePokemon(randNum)
    setisRandShowing(true)
}
 
function handleAddPokemon(pokemon){
      const pokemonInArray = pokemon
      const addedPokemon = pokemonInArray[0]
      
      if (team.length < 6){
      setTeam(prevTeam => [...prevTeam, addedPokemon])
      choosePokemon(randNum)
      }
      else {
        setTeamFull(true)
      }
}

function handleShowStats(){
    setShowStats(prevStats => !prevStats)
}

function handleRemovePokemon(pokemonId){
  const updatedTeamArray = team.filter((pokemon) => pokemon.id !== pokemonId)
  setTeam([...updatedTeamArray])
  setTeamFull(false)
}

  return (
    <>
      { startApp && <Starter 
                    handleStart={handleStart}
                    />
      }
      { !startApp && <CurrentTeam
                      team={team}
                      showStats={showStats}
                      handleShowStats={handleShowStats}
                      handleRemovePokemon={handleRemovePokemon}
                     />}
      { !startApp && <SelectTeam 
                        randPokemon={randPokemon}
                        randNum={randNum}
                        handleRandPokemon={handleRandPokemon}
                        handleAddPokemon={handleAddPokemon}
                        showStats={showStats}
                        handleShowStats={handleShowStats}
                        isRandShowing={isRandShowing}
                        teamFull={teamFull}
                      />}
    </>
  )
}

export default App
