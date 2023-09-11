import React from 'react'

const Stats = ({hp,attack,defense,specialAttack,specialDefense,speed}) => {
  return (
    <div className='flex flex-col items-center'>
        <p>Hit Points: {hp}</p>
        <p>Attack: {attack}</p>
        <p>Defense: {defense}</p>
        <p>Special Attack: {specialAttack}</p>
        <p>Special Defense: {specialDefense}</p>
        <p>Speed: {speed}</p>
    </div>
  )
}

export default Stats