import React,{useState} from 'react';
import './App.css'
// import { MuiTypography } from './components/MuiTypography';
import { MuiButton } from './components/MuiButton';

function App(){
  const [formats, setFormats] = useState<Array<string>>([]);
  return (
    <div className='App'>
      <MuiButton />
    </div>
  )
}

export default App;
