import React, { useState } from 'react';
import { account, ID } from './libs/Appwrite';

const Login = () => {
  const [username, setUsername] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault(); 
    loginForm(username, password);
  };

  async function login(email, password) {
    await account.createEmailSession(email, password);
    setLoggedInUser(await account.get());
  }

  return (
    <div>
      <h1>Login</h1>
      <form>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />

        <button type="button" onClick={() => login(email, password)}>
          Login
        </button>

        <button
          type="button"
          onClick={async () => {
            await account.create(ID.unique(), email, password, name);
            login(email, password);
          }}
        >
          Register
        </button>

        <button
          type="button"
          onClick={async () => {
            await account.deleteSession('current');
            setLoggedInUser(null);
          }}
        >
          Logout
        </button>
      </form>
    </div>
  );
};


export default Login;
