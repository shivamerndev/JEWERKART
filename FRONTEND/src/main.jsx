import { createRoot } from 'react-dom/client'
import './app/index.css'
import { Provider } from 'react-redux'
import store from './app/store'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/Routes'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
)