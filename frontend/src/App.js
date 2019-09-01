import React from 'react';
import './App.css';
//import Form from './components/Form';
import Dropzone from './components/dropzone';

function App() {
  return (
    <div className="App">
      <div className="Card">
        <Dropzone onFilesAdded={console.log}/>
      </div>
    </div>
  );
}

export default App;
