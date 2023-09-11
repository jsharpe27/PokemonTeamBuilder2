import Stats from './Stats'
import { motion } from 'framer-motion'

const CurrentTeam = ({team,handleRemovePokemon}) => {

    const currentTeamElements = team.map(function(pokemon) {
        return <motion.div className='bg-gray-200 flex flex-col items-center pt-3'  key={pokemon.id}
        initial={{ opacity: 0, scale:0 }}
        animate={{ opacity: 1, scale:1 }}
        transition={{
            type: "tween",
            duration: 0.2,
          }}
               >
                    <h2 className='font-medium capitalize text-2xl'>{pokemon.name}</h2>
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
                    <button onClick={ ()=> handleRemovePokemon(pokemon.id)}
                    className='group bg-gray-500 font-medium text-white px-6
                    py-4 mt-3 flex items-center gap-2 outline-none focus:scale-110 
                    hover:bg-black hover:text-red-300 active:scale-105
                    transition'
                    
                    >Remove Pokemon</button>
               </motion.div>
    })

  return (
    
     <div className='flex items-center justify-center pt-[2rem]'
   
      >
          {currentTeamElements}
      </div>
    
  )
}

export default CurrentTeam