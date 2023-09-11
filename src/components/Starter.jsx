import Stats from './Stats'
import {motion} from 'framer-motion'

const Starter = ({handleStart}) => {
  return (
    
    <div className='flex items-center justify-center flex-col'>

            <motion.h1 className='mb-4 mt-4 px-4 text-2xl 
            font-medium !leading-[1.5] sm:text-4xl'
            >Build your Pokemon Team!</motion.h1>
     
      <motion.h2 className='text-2xl'
      initial={{  x:-400}}
      animate={{  x:0 }}
      transition={{ type: 'spring', stiffness: 80, damping: 10, duration: 1 }}
      >Choose a Starter pokemon</motion.h2>

      <motion.div className='flex mt-4 gap-[5rem] max-[50rem] justify-center items-center' 
      initial={{  x:-400}}
      animate={{  x:0 }}
      transition={{ type: 'spring', stiffness: 80, damping: 10, duration: 1 }}
      >
            <div className='flex flex-col items-center '>
                  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" 
                  width="196" height="196"
                  alt="sprite of Bulbasaur"
                  />
                  <h3 className='font-medium mb-4'>Bulbasaur</h3>
                  <Stats
                        id={1}
                        hp={45}  
                        attack={49}
                        defense={49}
                        specialAttack={65}
                        specialDefense={65}
                        speed={45}
                  />
                  <button className='group bg-green-300 font-medium text-black px-6
                        py-4 mt-3 flex items-center rounded-full
                        outline-none focus:scale-110 hover:scale-110
                        hover:bg-emerald-900 hover:text-white active:scale-105
                        transition' 
                        onClick={()=> handleStart(1)}>Choose Bulbasaur </button>
            </div> 

            <div className='flex flex-col items-center'>
                  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" 
                  width="196" height="196"
                  alt="sprite of Charmander" />
                  <h3 className='font-medium mb-4'>Charmander</h3>
                  <Stats
                        id={2}
                        hp={39}  
                        attack={52}
                        defense={43}
                        specialAttack={60}
                        specialDefense={50}
                        speed={65}
                  />
                  
                  <button className='group bg-red-300 font-medium text-black px-6
                        py-4 mt-3 flex items-center rounded-full
                        outline-none focus:scale-110 hover:scale-110
                        hover:bg-red-900 hover:text-white active:scale-105
                        transition' 
                  onClick={()=> handleStart(4)}>Choose Charmander </button>
            </div> 

            <div className='flex flex-col items-center'>
                  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" 
                  width="196" height="196"
                  alt="sprite of Squirtle" />
                  <h3 className='font-medium mb-4'>Squirtle</h3>
                        <Stats 
                              id={3}
                              hp={44}  
                              attack={48}
                              defense={65}
                              specialAttack={50}
                              specialDefense={64}
                              speed={43}
                        />
                  <button className='group bg-blue-300 font-medium text-black px-6
                        py-4 mt-3 flex items-center rounded-full
                        outline-none focus:scale-110 hover:scale-110
                        hover:bg-blue-900 hover:text-white active:scale-105
                        transition' 
                  onClick={()=> handleStart(7)}>Choose Squirtle </button>
            </div>
      
      </motion.div>
      </div>
  )
}

export default Starter