import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import "./../public/css/fonts.css"
import "./../public/css/index.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';
import { ThemeProvider } from './Contexts/ThemeProvider.jsx';
import CartProvider from './Contexts/CartProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </CartProvider>
  </StrictMode>,
)
