import React, { useEffect, useState, useContext } from 'react'
import Createuser from './Createuser';
import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import UserEdit from './UserEdit';
import UserContext from './usercontext';


function UserList() {
    const userdata = useContext(UserContext);
    const [userList, setUserlist] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const user = useContext(UserContext)
    useEffect(() => {
        getUsers();
    }, [])

    let getUsers = async () => {
        try {
            const users = await axios.get("https://6391eddbb750c8d178d1d4f0.mockapi.io/first/new");
            setUserlist(users.data);
            setLoading(false);
        } catch (error) {
            console.log(error)
        }
    }
    let handledelete = async (id) => {
        try {
            const conform = window.confirm("want to delete a file?")
            if (conform) {
                await axios.delete(`https://6391eddbb750c8d178d1d4f0.mockapi.io/first/new/${id}`);
                getUsers()
            }

        } catch (error) {
            alert("something went worng")
        }
    }
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h4 mb-0 text-gray-800">User - <b>{userdata.user.name}</b></h1>
                <Link to="/portal/Createuser" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                    <i className="fas fa-download fa-sm text-white-50"></i>Createuser</Link>
            </div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Personal Info</h6>
                </div>
                <div className="card-body">
                    {isLoading ? (<h1>Loading...</h1>) : (<div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>name</th>
                                    <th>class</th>
                                    <th>dob</th>
                                    <th>club</th>
                                    <th>mentor</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>id</th>
                                    <th>name</th>
                                    <th>class</th>
                                    <th>dob</th>
                                    <th>club</th>
                                    <th>mentor</th>
                                    <th>Action</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                    userList.map((user, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{user.id}</td>
                                                <td>{user.name}</td>
                                                <td>{user.class}</td>
                                                <td>{user.dob}</td>
                                                <td>{user.club}</td>
                                                <td>{user.mentor}</td>
                                                <th>
                                                    <Link to={`/portal/listview/${user.id}`} className='btn btn-info btn-sm mr-1'>View</Link>
                                                    <Link to={`/portal/useredit/${user.id}`} className='btn btn-primary btn-sm mr-1'>Edit</Link>
                                                    <button onClick={() => handledelete(user.id)} className='btn btn-danger btn-sm mr-1'>Delete</button>
                                                </th>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    </div>)}

                </div>
            </div>
        </>
    )
}

export default UserList