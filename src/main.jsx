import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Provider1 from './hooks/provider1.jsx'
import { Provider } from 'react-redux'
import { store } from './assets/store/store.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Provider1>
        {/* Your application components */}
        <App />
      </Provider1>
    </Provider>
  </StrictMode>,
)
