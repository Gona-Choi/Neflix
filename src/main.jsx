
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const root = createRoot(document.getElementById('root'))
const queryClient = new QueryClient()
root.render(
  
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
     <App />
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} buttonPosition='bottom-right'/>
  </QueryClientProvider>
)