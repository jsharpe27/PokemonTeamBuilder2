import React from 'react'
import Stats from './Stats'

const CurrentTeam = ({team,handleRemovePokemon}) => {

    const currentTeamElements = team.map(function(pokemon) {
        return <div className="pokemon-team" key={pokemon.id}>
                    <h2>{pokemon.name}</h2>
                    <img className="sprite-img" src={pokemon.img} />
                    <Stats 
                     id={pokemon.id}
                     hp={pokemon.stats.hp}  
                     attack={pokemon.stats.attack}
                     defense={pokemon.stats.defense}
                     specialAttack={pokemon.stats.special_attack}
                     specialDefense={pokemon.stats.special_defense}
                     speed={pokemon.stats.speed}
                    />
                    <button className='button' onClick={ ()=> handleRemovePokemon(pokemon.id)}>Remove Pokemon</button>
               </div>
    })

  return (
    <div>
      <h2 className="team-title">Your team</h2>
      <div className="current-team">
          {currentTeamElements}
      </div>
    </div>
  )
}

export default CurrentTeam