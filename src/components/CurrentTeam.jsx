import Stats from './Stats'

const CurrentTeam = ({team,handleRemovePokemon}) => {

    const currentTeamElements = team.map(function(pokemon) {
        return <div  key={pokemon.id}>
                    <h2>{pokemon.name}</h2>
                    <img  src={pokemon.img} />
                    <Stats 
                     id={pokemon.id}
                     hp={pokemon.stats.hp}  
                     attack={pokemon.stats.attack}
                     defense={pokemon.stats.defense}
                     specialAttack={pokemon.stats.special_attack}
                     specialDefense={pokemon.stats.special_defense}
                     speed={pokemon.stats.speed}
                    />
                    <button onClick={ ()=> handleRemovePokemon(pokemon.id)}>Remove Pokemon</button>
               </div>
    })

  return (
    <div>
      <h2 >Your team</h2>
      <div >
          {currentTeamElements}
      </div>
    </div>
  )
}

export default CurrentTeam