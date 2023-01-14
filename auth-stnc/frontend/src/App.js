import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from '../src/pages/auth/Login.jsx'
import Layout from '../src/components/Layout/Layout'
import Home from'../src/pages/auth/Home.jsx'
import Statistique from '../../frontend/src/pages/user/admin/Statistique'
import Dashboards from '../../frontend/src/components/Layout/Dachbord.jsx'
import Formation from './pages/user/admin/Formation'
import Organisme from './pages/user/admin/Organisme'
import Editemploye from '../src/pages/user/admin/editemploye'
import Setting from '../../frontend/src/pages/user/admin/Setting'
import Showinformation from './pages/user/employe/Showinformation.js'
import Historique from './pages/user/admin/Historique.js'
import Addemploye from './pages/user/admin/Addemploye.js'

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
                {/* { authentification } */}

            <Route element = {<Layout />}>
                      <Route path="/" element={<Home />}/>
                      <Route path="/login" element={<Login />}/>
            </Route>
                    {/* { employe } */}

          <Route path='/dashboard/employe' element={<Dashboards />}>
                     <Route path='' element={<Showinformation />} />
          </Route>
                      {/* { Manager } */}

          <Route path='/dashboard/admin' element={<Dashboards />}>
                <Route path='' element={<Statistique />} />
                <Route path='Formation' element={<Formation />} />
                <Route path='organisme' element={<Organisme />} />
                <Route path='Historique' element={<Historique />} />
                <Route path='Addemploye' element={<Addemploye />} />
                <Route path='editemploye' element={<Editemploye />} />
                <Route path='setting' element={<Setting />} /> 
          </Route>
 
    </Routes>

    </BrowserRouter>
  );
}

export default App;
