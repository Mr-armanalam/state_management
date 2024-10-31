import React from 'react'
import Page4 from './page4'
import { user } from '../hooks/provider2'
user

const Page3 = () => {
   const {flower} = user();
  return (
    <div>
        {`${flower } `} 
        Result of Page4 in Page3
        <Page4 />
    </div>
  )
}

export default Page3