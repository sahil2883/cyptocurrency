import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { useState } from 'react';
import Detail from './components/Detail';
import 'react-loading-skeleton/dist/skeleton.css';

function App() {

  const [toggle,settoggle] = useState(true);
  const [mode,setmode] = useState(false);

  const handletoggle = () =>{
    settoggle(!toggle);
  }

  const handleMode = () =>{
    setmode(!mode);
  }

  

  return (
    <BrowserRouter>
      <div className='d-flex'>
        <Sidebar toggle={toggle} handletoggle={handletoggle}/>
        <div className={toggle?'d-flex-header':'d-flex-header-1'}>
          <Header toggle={toggle} handletoggle={handletoggle} mode={mode} handleMode={handleMode} />
          <Routes>
            <Route path="/" element={<Dashboard mode={mode}/>} />
          <Route path="/:id" element={<Detail mode={mode}/>}  />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
