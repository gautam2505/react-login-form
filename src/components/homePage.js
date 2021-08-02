import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// can use 'useStore' from react-redux as well for accessing reduz state as well
import './homePage.css';

const HomePage = (props) => {
    const [isUserAdded, setIsUserAdded] = useState(false);
    const role = useSelector(state => state.role);
    const role1 = useSelector(state => state);
    // console.log('role in homepage component===>>', role);
    const name = useSelector(state => state.name);
    
    // useEffect(()=>{
    //     console.log('role in homepage component===>>', role1);
    // }, [role1])

    // const handleAddUsers = () => {
    //     setIsUserAdded(!isUserAdded);
    // }



    return (
        <React.Fragment>
            {props.users.map((user, idx) => {
                return(
                <ul>
                    {isUserAdded && <li key={idx+user.name}>Added Users...</li>}
                </ul>
            )})}
            <table>
                <tbody>
                <tr style={{ fontFamily: 'arial, sans-serif', borderCollapse: 'collapse', width: '100%' }}>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Email</th>
                </tr>
                <tr>
                    <td>Virat Kohli</td>
                    <td>Admin</td>
                    <td>viratkohli@gmail.com</td>
                </tr>
                <tr>
                    <td>Gautam Nagi</td>
                    <td>{role}</td>
                    <td>{name}@gmail.com</td>
                </tr>
                <tr>
                    <td>Srinath BS</td>
                    <td></td>
                    <td>Karnataka</td>
                </tr>
                </tbody>
            </table>
            <button onClick={handleAddUsers}>
                + Add User
            </button>
        </React.Fragment>
    )
}

export default HomePage;