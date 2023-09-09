import React from 'react'
import Stats from './Stats'

const Starter = ({handleStart}) => {
  return (
    
    <div className="starter-screen">
      <div className="title">
            <h1>Build your Pokemon Team!</h1>
      </div>
      <h2>Choose a Starter pokemon</h2>
      <div className="starter-container">
            <div className="starter-choice bulbasaur">
                  <h3 className="starter-name">Bulbasaur</h3>
                  <Stats
                        id={1}
                        hp={45}  
                        attack={49}
                        defense={49}
                        specialAttack={65}
                        specialDefense={65}
                        speed={45}
                  />
                  <img className="sprite-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="sprite of Bulbasaur" />
                  <button className="button" onClick={()=> handleStart(1)}>Choose Bulbasaur </button>
            </div> 

            <div className="starter-choice charmander">
                  <h3 className="starter-name">Charmander</h3>
                  <Stats
                        id={2}
                        hp={39}  
                        attack={52}
                        defense={43}
                        specialAttack={60}
                        specialDefense={50}
                        speed={65}
                  />
                  <img className="sprite-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" alt="sprite of Charmander" />
                  <button className="button" onClick={()=> handleStart(4)}>Choose Charmander </button>
            </div> 

            <div className="starter-choice squirtle">
                  <h3 className="starter-name">Squirtle</h3>
                  <Stats
                        id={3}
                        hp={44}  
                        attack={48}
                        defense={65}
                        specialAttack={50}
                        specialDefense={64}
                        speed={43}
                  />
                  <img className="sprite-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" alt="sprite of Squirtle" />
                  <button className="button" onClick={()=> handleStart(7)}>Choose Squirtle </button>
            </div>
      </div>
    </div>
  )
}

export default Starter