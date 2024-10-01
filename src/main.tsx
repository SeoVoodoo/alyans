import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/redux-store';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App store={store} />
  </BrowserRouter>
)
