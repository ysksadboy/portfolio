import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../src/components/sidebar'
import './components/sidebar';
import DefaultSidebar from '../src/components/sidebar';
import NavbarWithCTAButton from './components/navbar';
import DefaultFooter from './components/footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <NavbarWithCTAButton />
    <DefaultSidebar />
    <DefaultFooter />
  </React.StrictMode>

);

