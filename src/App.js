import Login from './pages/login';
import SignUp from './pages/signup';
import Landing from './pages/landing';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [users, setUsers] = useState([
    {
      userName: "yuva",
      password: 123
    },
    {
      userName: "abc",
      password: 123
    }
  ])
  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login users={users} setUsers={setUsers} />}></Route>
          <Route path='/signup' element={<SignUp users={users} setUsers={setUsers} />}></Route>
          <Route path='/landing' element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;

