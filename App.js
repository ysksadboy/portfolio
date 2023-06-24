import './components/sidebar';
import '../src/components/sidebar';
import './App.css';
import React from 'react';
import { DarkThemeToggle, Flowbite } from 'flowbite-react';

function App() {
  return (


    <Flowbite>

      <div className="App" label="Pro"
        labelColor="dark" >

        <header>YSK SADBOY</header>
        <DarkThemeToggle />

      </div>

    </Flowbite>

  );
}

export default App;
