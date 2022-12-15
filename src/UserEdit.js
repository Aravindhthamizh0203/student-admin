import { React, useState, useEffect } from 'react'
import { useFormik } from 'formik';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UserEdit() {
    const [isLoading, setLoading] = useState(false);
    const params = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        getuserdata()
    }, [])
    let getuserdata = async () => {
        try {
            const user = await axios.get(`https://6391eddbb750c8d178d1d4f0.mockapi.io/first/new/${params.userid}`)
            myFormik.setValues(user.data)
        } catch (error) {

        }
    }
    const myFormik = useFormik({
        initialValues: {
            name: "",
            class: "",
            dob: "",
            club: "",
            mentor: ""
        }, validate: (values) => {
            let error = {};
            if (!values.name) {
                error.name = "please enter";
            } else if (values.name.length < 3) {
                error.name = "mini 3";
            } else if (values.name.length > 15) {
                error.name = "max 15";
            } else if (!/^([a-zA-Z ]){2,30}$/i.test(values.name)) {
                error.name = "should use aplhabet only";
            }
            if (!/^[A-Z]{1,5}$/i.test(values.class)) {
                error.class = "please enter";
            }
            if (!values.class) {
                error.class = "please enter";
            }
            if (!/^([a-zA-Z ]){2,30}$/i.test(values.club)) {
                error.club = "should use aplhabet only";
            }
            if (!values.club) {
                error.club = "please enter";
            }
            if (!values.mentor) {
                error.mentor = "please enter";
            }
            if (!/^([a-zA-Z ]){2,30}$/i.test(values.mentor)) {
                error.mentor = "should use aplhabet only";
            }
            if (!values.dob) {
                error.dob = "please enter";
            }

            return error;
        }, onSubmit: async (values) => {
            try {
                setLoading(true)
                await axios.put(`https://6391eddbb750c8d178d1d4f0.mockapi.io/first/new/${params.userid}`, values)
                navigate("/portal/userlist")
                setLoading(false)
            } catch (error) {
                alert("something went worng")
            }
        },
    })
    return (
        <div className='container'>
            <form onSubmit={myFormik.handleSubmit}>
                <div className='row'>
                    <div className='col-lg-6'>
                        <lable>name</lable>
                        <input
                            name="name"
                            onChange={myFormik.handleChange}
                            value={myFormik.values.name}
                            type={"text"}
                            className={`form-control ${myFormik.errors.name ? "is-invalid" : "is-valid"}`} />
                        <span style={{ color: "red" }}>{myFormik.errors.name}</span>
                    </div>
                    <div className='col-lg-6'>
                        <lable>CLASS</lable>
                        <input name="class" onChange={myFormik.handleChange} value={myFormik.values.class} type={"text"} className={`form-control ${myFormik.errors.email ? "is-invalid" : "is-valid"}`} />
                        <span style={{ color: "red" }}>{myFormik.errors.class}</span>
                    </div>
                    <div className='col-lg-6'>
                        <lable>dob</lable>
                        <input name="dob" onChange={myFormik.handleChange} value={myFormik.values.dob} type={"date"} className={`form-control ${myFormik.errors.email ? "is-invalid" : "is-valid"}`} />
                        <span style={{ color: "red" }}>{myFormik.errors.dob}</span>
                    </div>
                    <div className='col-lg-6'>
                        <lable>mentor</lable>
                        <input name="mentor" onChange={myFormik.handleChange} value={myFormik.values.mentor} type={"text"} className={`form-control ${myFormik.errors.email ? "is-invalid" : "is-valid"}`} />
                        <span style={{ color: "red" }}>{myFormik.errors.mentor}</span>
                    </div>
                    <div className='col-lg-4'>
                        <lable>club</lable>
                        <select name="club" onChange={myFormik.handleChange} value={myFormik.values.club} className={`form-control ${myFormik.errors.country ? "is-invalid" : "is-valid"}`} >
                            <option value={""}>-select value-</option>
                            <option value={"RED"}>Red</option>
                            <option value={"GREEN"}>Green</option>
                            <option value={"YELLOW"}>Yellow</option>
                            <option value={"BLUE"}>Blue</option>
                        </select>
                        <span style={{ color: "red" }}>{myFormik.errors.club}</span>
                    </div>
                    <div className='col-lg-3 mt-5'>
                        <input disabled={isLoading} type={"submit"} value={isLoading ? "loading.." : "update"} className='btn btn-primary' />
                    </div>
                </div>
            </form>

        </div>
    )
}

export default UserEdit