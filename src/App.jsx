
import Page1 from './components/page1'
import './App.css'
import Page3 from './components/page3'
import { Provider2 } from './hooks/provider2'

function App() {

  return (
    <>
      <div>
        <h1>Arman this is main page </h1>
      </div>
      <Page1 /> 
      <Provider2><Page3/></Provider2>      
    </>  
  )
}

export default App
