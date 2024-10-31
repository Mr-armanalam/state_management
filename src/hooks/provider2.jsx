import React, { createContext, useContext, useState } from 'react'


export const user2context = createContext();

export const user = () =>{
    return useContext(user2context);
}

export const Provider2 = ({children}) => {
    const [flower, setFlower] = useState(false);
  return (
    <user2context.Provider value={{flower, setFlower}}>
      {children}
    </user2context.Provider>
    
  )
}
