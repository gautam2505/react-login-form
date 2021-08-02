import React, { useState, useRef, useEffect } from 'react';
import HomePage from './components/homePage';
import { useSelector, useDispatch } from 'react-redux';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const userNameInput= useRef(null);

  const userName = useSelector((state) => state.userName);
  console.log('username==>', userName)
  const password = useSelector((state) => state.password);
  console.log('password==>', password)
  const loggedIn = useSelector((state) => state.loggedIn);
  const isClicked = useSelector((state) => state.loggedIn);
  const phoneNumber = useSelector((state) => state.phoneNumber);
  const name = useSelector((state) => state.name);
  const users = useSelector((state) => state.users);
  const role = useSelector((state) => state.role);

  useEffect(()=>{
    userNameInput.current.focus();
  }, [])

  const handleLogin = (e) => {
    e.preventDefault();
    if(userName){
      dispatch({ type: 'LOGGED_IN', value: !loggedIn});
      dispatch({ type: 'IS_CLICKED', value: !isClicked })
      const totalUsers=[];
      totalUsers.push(userName);
      dispatch({ type: 'USERS', value: totalUsers });
      console.log('Logged In');      
    } else{
      console.log('Provide user name & password');      
    }
  }

  const handleUserNameChange = (e) => {
    dispatch({ type: 'USER_NAME', value: e.target.value })
  }

  const handleNameChange = (e) => {
    dispatch({ type: 'NAME', value: e.target })
  }

  const showPassword = () => {
    const element = document.getElementById('password_input');
    if(element.type === 'password'){
      element.type = 'text';
    } else element.type = 'password';
  }

  const handlePasswordChange = (e) => {
    dispatch({ type: 'PASSWORD', value: e.target.value })
  }

  const handleRoleChange = (e) => {
    dispatch({ type: 'ROLE', value: e.target.value })
  }

  return (
    <div>
      {!loggedIn && (
      <div className='rootDiv'>
        <label htmlFor="user_name">User Name:</label><br />
        <input type='text' ref={userNameInput} id="user_name" onChange={(e) => handleUserNameChange(e)}></input><br />
        <label htmlFor="password">Password:</label><br />
        <input type='password'  id="password_input" onClick={handlePasswordChange}></input>
        <input type="checkbox" id="password" onClick={showPassword} name='password' /><br />
        <label htmlFor='role'>Role: </label><br />
        <input type='text' onChange={(e) => handleRoleChange(e)}></input><br />
        <label htmlFor="id">ID:</label><br />
        <input type='text' id="id" ></input><br />
        <label htmlFor='name'>Name: </label><br />
        <input id='name' type='text' onChange={(e) => handleNameChange(e)}></input><br />
        <label htmlFor='phone_number'>Phone Number: </label><br />
        <input type='text' id='phone_number'></input><br />
        <p>{(isClicked && phoneNumber.length > 10) && 'Phone number must be atleast 10 digits long...' }</p>
        <button type='submit' onClick={(e)=>handleLogin(e)}>Login</button>
      </div> 
      )}
      
      { loggedIn && <HomePage userName={userName} name={name} users={users} role={role}/> }
    </div>
  );
  // - Id, name, address, phone no, role (admin/normal)
}

export default App;
