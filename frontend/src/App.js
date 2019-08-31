import React from 'react';
import './App.css';
//import Form from './components/Form';
import DragNDrop from './components/DragNDrop';
import Dropzone from './components/dropzone';

function App() {
  return (
    <div className="App">
      <div className="Card">
        <Dropzone onFilesAdded={console.log}/>
      </div>
      <DragNDrop />
    </div>
  );
}

export default App;
