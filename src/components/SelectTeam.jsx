import Stats from './Stats'

const SelectTeam = ({handleRandPokemon, randPokemon, randNum, handleAddPokemon,isRandShowing, showStats, handleShowStats,teamFull}) => {

  const randPokemonElement = randPokemon.map(function(pokemon){
      return <div className='flex flex-col items-center ' key={pokemon.id}>
          
          <h2 className='mt-[1rem] text-5xl italic
                          tracking-widest
                           text-white capitalize'>{pokemon.name}</h2>
          <img width="196" height="196" onClick={handleShowStats} src={pokemon.img} />
          { showStats && <Stats 
                     id={pokemon.id}
                     hp={pokemon.stats.hp}  
                     attack={pokemon.stats.attack}
                     defense={pokemon.stats.defense}
                     specialAttack={pokemon.stats.special_attack}
                     specialDefense={pokemon.stats.special_defense}
                     speed={pokemon.stats.speed}
                    />}
          <h1 className='text-xl text-white' >Click pokemon to show stats</h1>
      </div>
  })

  return (      
      <div className='mt-[5rem] flex flex-col items-center bg-slate-600 p-10'>
        <button  onClick={ ()=> handleRandPokemon(randNum)}
        className='group bg-blue-600 text-2xl font-medium text-white px-6
        py-2 flex items-center gap-2 rounded-full
        outline-none focus:scale-110 hover:scale-110
         hover:text-yellow-300 active:scale-105
        transition'
        >Find Pokemon to add to your team!</button>
        
          <div className='flex flex-col items-center'>
            {randPokemonElement}
            { isRandShowing && !teamFull ? <button onClick={ ()=> handleAddPokemon(randPokemon)}
                                        className='group bg-blue-600  font-medium text-white px-6
                                        py-4 mt-3 flex items-center gap-2 outline-none 
                                        hover:bg-black hover:text-yellow-300 active:scale-105
                                        transition'
            >
              Add Pokemon!</button> : ""}
            {teamFull && <h3 className='text-xl text-white'>
              Your is team full! Remove a pokemon to add another</h3>}
          </div>
      </div>
  )
}

export default SelectTeam