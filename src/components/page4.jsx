import React, { useContext } from 'react'
import { user } from '../hooks/provider2'

const Page4 = () => {
    const {flower, setFlower} = user();
  return (
    <div 
    onClick={()=>setFlower(!flower)}
    style={{color: "blue", cursor: "pointer"}}
    >Page4 
    {flower}
    </div>
  )
}

export default Page4