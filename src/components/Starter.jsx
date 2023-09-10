import Stats from './Stats'
import {motion} from 'framer-motion'

const Starter = ({handleStart}) => {
  return (
    
    <motion.div className='flex items-center justify-center flex-col'
    initial={{  x:-400}}
    animate={{  x:0 }}
    transition={{ type: 'spring', stiffness: 80, damping: 10, duration: 1 }}
    >

            <motion.h1 className='mb-4 mt-4 px-4 text-2xl 
            font-medium !leading-[1.5] sm:text-4xl'
            initial={{  y:-100}}
            animate={{  y:0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 10, duration: 1 }}
            >Build your Pokemon Team!</motion.h1>
     
      <h2 className='text-2xl'>Choose a Starter pokemon</h2>

      <div className='flex bg-gray-300 mt-4 gap-[5rem]' >
            <div>
                  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" 
                  alt="sprite of Bulbasaur"
                  />
                  <h3>Bulbasaur</h3>
                  <Stats
                        id={1}
                        hp={45}  
                        attack={49}
                        defense={49}
                        specialAttack={65}
                        specialDefense={65}
                        speed={45}
                  />
                  <button className='mb-4 mt-4 text-2xl' onClick={()=> handleStart(1)}>Choose Bulbasaur </button>
            </div> 

            <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" alt="sprite of Charmander" />
                  <h3 classNam>Charmander</h3>
                  <Stats
                        id={2}
                        hp={39}  
                        attack={52}
                        defense={43}
                        specialAttack={60}
                        specialDefense={50}
                        speed={65}
                  />
                  
                  <button onClick={()=> handleStart(4)}>Choose Charmander </button>
            </div> 

            <div >
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" alt="sprite of Squirtle" />
                  <h3 classNam>Squirtle</h3>
                  <Stats
                        id={3}
                        hp={44}  
                        attack={48}
                        defense={65}
                        specialAttack={50}
                        specialDefense={64}
                        speed={43}
                  />
                  <button onClick={()=> handleStart(7)}>Choose Squirtle </button>
            </div>
      </div>
    </motion.div>
  )
}

export default Starter