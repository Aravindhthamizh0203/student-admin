import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect } from 'react';

function Userview() {
    const params = useParams();
    useEffect(() => {
        data()
    }, [])
    const data = async (values) => {
        try {
            const test = await axios.get(`https://6391eddbb750c8d178d1d4f0.mockapi.io/first/new/${params.id}`)
            console.log()
        } catch (error) {
            console.log(error)
        } data()
    }
    return (<>
        {/* <div>UserView -{params.userid}</div>
        <div>name : {data.name}</div>
        <div>class : {data.class}</div>
        <div>date of birth : {params.dob}</div>
        <div>club : {params.club}</div>
        <div>mentor-name : {params.mentor}</div> */}
    </>
    )
}

export default Userview