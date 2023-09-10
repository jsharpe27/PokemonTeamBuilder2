import Stats from './Stats'

const SelectTeam = ({handleRandPokemon, randPokemon, randNum, handleAddPokemon,isRandShowing, showStats, handleShowStats,teamFull}) => {

  const randPokemonElement = randPokemon.map(function(pokemon){
      return <div key={pokemon.id}>
          <h2>{pokemon.name}</h2>
          <img onClick={handleShowStats} src={pokemon.img} />
          { showStats && <Stats 
                     id={pokemon.id}
                     hp={pokemon.stats.hp}  
                     attack={pokemon.stats.attack}
                     defense={pokemon.stats.defense}
                     specialAttack={pokemon.stats.special_attack}
                     specialDefense={pokemon.stats.special_defense}
                     speed={pokemon.stats.speed}
                    />}
      </div>
  })

  return (
    <div>
      
      <div >
      <button  onClick={ ()=> handleRandPokemon(randNum)}>Find Pokemon to add to your team!</button>
      <h3 >Click pokemon to show stats</h3>
        <div >
          {randPokemonElement}
          { isRandShowing && !teamFull ? <button onClick={ ()=> handleAddPokemon(randPokemon)}>Add Pokemon!</button> : ""}
          {teamFull && <h3>Your is team full! Remove a pokemon to add another</h3>}
        </div>
      </div>
    </div>
  )
}

export default SelectTeam