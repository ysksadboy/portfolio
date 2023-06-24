import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DefaultSidebar from '../src/components/sidebar';
import NavbarWithCTAButton from './components/navbar';
import DefaultFooter from './components/footer';
import { Flowbite } from 'flowbite-react';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Flowbite />
    <NavbarWithCTAButton />
    <DefaultSidebar />
    <DefaultFooter />
  </React.StrictMode>

);

