import React, { createContext, useState } from 'react'

export const User1context = createContext();

const Provider1 = ({children}) => {
    const [counter, setCounter] = useState(0);
  return (
    <User1context.Provider value={{counter,setCounter}}>
        {children}
    </User1context.Provider>
  )
}

export default Provider1



// import React, { createContext, useState } from 'react'

// export const User1context = createContext();

// const Provider1 = ({children}) => {
//     const [fruits, setFruits] = useState("apple");
//   return (
//     <User1context.Provider value={{fruits,setFruits}}>
//         {children}
//     </User1context.Provider>
//   )
// }

// export default Provider1