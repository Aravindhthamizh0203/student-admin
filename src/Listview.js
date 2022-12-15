import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios';
import UserContext from './usercontext';


function Listview() {
    const [Listview, setListview] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const user = useContext(UserContext)
    useEffect(() => {
        getUsers();
    }, [])

    let getUsers = async () => {
        try {
            const users = await axios.get(`https://6391eddbb750c8d178d1d4f0.mockapi.io/first/new/${user.value.userid}`);
            console.log(users)
            setListview(users.data);
            console.log(users);
            setLoading(false);
        } catch (error) {
            console.log(error)
        }
    }
    //     return ({
    //         // Listview.map((user, index) => {
    //         //     return (<>{isLoading ? (<h1>Loading...</h1>) :
    //         //         <div key={index}>
    //         //             <div>{user.id}</div>
    //         //             <div>{user.name}</div>
    //         //             <div>{user.class}</div>
    //         //             <div>{user.dob}</div>
    //         //             <div>{user.club}</div>
    //         //             <div>{user.mentor}</div></div>}</>)
    //         })
    //     })
}

export default Listview