import React, {useState, useEffect} from 'react'
import Axios from "axios";
import logo from './logo.svg'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const { data } = await  await Axios.get('/api/user')
    const users = await data;
    setUsers(users);
    console.log(users);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <p key={user._id}>{user.fullname}</p>
      ))}
    </div>
  );
}

// function App () {
//   const [msg, setMsg] = useState('')
//   const handleClick = async () => {
//     const data = await window.fetch('/api/user')
//     const json = await data.json()
//     const msg = json.msg
//     setMsg(msg)
//   }
//   return (
//     <div className='App'>
//       <header className='App-header'>
//         <img src={logo} className='App-logo' alt='logo' />
//         <button onClick={handleClick}>
//           Call api
//         </button>
//         <p>{msg}</p>
//       </header>
//     </div>
//   )
// }

export default App
