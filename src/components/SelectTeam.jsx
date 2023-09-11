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
      <div className='mt-[5rem] flex flex-col items-center'>
        <button  onClick={ ()=> handleRandPokemon(randNum)}
        className='group bg-black  font-medium text-white px-6
        py-2 mt-3 flex items-center gap-2 rounded-full
        outline-none focus:scale-110 hover:scale-110
        hover:bg-blue-600 hover:text-yellow-100 active:scale-105
        transition'
        >Find Pokemon to add to your team!</button>
        <h3 >Click pokemon to show stats</h3>
          <div >
            {randPokemonElement}
            { isRandShowing && !teamFull ? <button onClick={ ()=> handleAddPokemon(randPokemon)}>Add Pokemon!</button> : ""}
            {teamFull && <h3>Your is team full! Remove a pokemon to add another</h3>}
          </div>
      </div>
  )
}

export default SelectTeam