import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import UserContext from './usercontext';

function Login() {
    const userdata = useContext(UserContext)
    return (
        < div className="container" >
            <div className="row justify-content-center">

                <div className="col-xl-10 col-lg-12 col-md-9">

                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            <div className="row">
                                <div className="col-lg-6 d-none d-lg-block">
                                    <img src='https://i.pinimg.com/originals/f3/ee/ca/f3eecab89ed37a8afd2f4beb1b6779cb.png' style={{ width: "35rem" }} alt='schoolimage' />                     </div>
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                        </div>
                                        <form className="user">
                                            <div className="form-group">
                                                <input type="email" className="form-control form-control-user"
                                                    id="exampleInputEmail" aria-describedby="emailHelp"
                                                    placeholder="Enter Email Address..."
                                                    onChange={(e) => {
                                                        userdata.setUser({ name: e.target.value })
                                                    }} />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control form-control-user"
                                                    id="exampleInputPassword" placeholder="Password" />
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox small">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck" />
                                                    <label classv="custom-control-label" for="customCheck">Remember
                                                        Me</label>
                                                </div>
                                            </div>
                                            <Link to="./portal/dashboard" className="btn btn-primary btn-user btn-block">
                                                Login
                                            </Link>
                                            <hr />
                                            <a href="index.html" className="btn btn-google btn-user btn-block">
                                                <i className="fab fa-google fa-fw"></i> Login with Google
                                            </a>
                                            <a href="index.html" className="btn btn-facebook btn-user btn-block">
                                                <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                            </a>
                                        </form>
                                        <hr />
                                        <div className="text-center">
                                            <a className="small" href="forgot-password.html">Forgot Password?</a>
                                        </div>
                                        <div className="text-center">
                                            <a className="small" href="register.html">Create an Account!</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div >

    )
}

export default Login