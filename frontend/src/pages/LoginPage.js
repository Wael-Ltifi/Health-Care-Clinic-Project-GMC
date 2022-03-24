import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { login } from '../redux/actions/authActions'
import { ToastContainer } from 'react-toastify'
import Slide from 'react-reveal/Slide'
import { Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const LoginPage = () => {
    const [info, setInfo] = useState({
        email: "",
        password: ""
    })

    const auth = useSelector(state => state.auth)

    const handelChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value })
    }

    const dispatch = useDispatch()
    const handelSubmit = (e) => {
        e.preventDefault()
        dispatch(login(info))

    }

    const history = useHistory()



    function handleSteady() {
        setTimeout(() => {
            history.push('/welcome')
            console.log("welcome")
        }, 2000)
    }

    useEffect(() => {
        if (auth.isAuth)
            handleSteady()
    }, [auth.isAuth])

    const sectionStyle = {

        backgroundImage: "url(" + "./image/login.png" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',

    }





    return (
        <div style={sectionStyle} className="text-dark text-center p-5 text-sm-start">
            <div className="container  ">
                {auth.isLoading && <><div className=" text-center"><Spinner className="text-light " animation="border" /></div></>}
                <div className="d-sm-flex flex-md-nowrap  align-items-center justify-content-space-between">
                    <Slide right><img className="  img-fluid w-50 " src="./image/LogoWhite.png" alt="LogoWhite" /></Slide >
                    <Slide left><div style={{ border: "2px solid gray", borderRadius: "15px", backdropFilter: "blur(6px)" }} className=" m-1 p-1">
                        <form className="px-md-5 py-3" onSubmit={handelSubmit}>
                            <div className="display-6 form-group-">
                                <label >Email address</label>
                                <input name="email" type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" onChange={handelChange} />
                            </div>
                            <div className="display-6 form-group">
                                <label >Password</label>
                                <input name="password" type="password" className="form-control" autocomplete id="exampleDropdownFormPassword1" placeholder="Password" onChange={handelChange} />
                            </div>

                            <div className="  py-3">
                                <button type="submit" className="btn px-5 text-dark btn-warning">Login</button>
                                <button type="reset" className="btn px-3 mx-1  btn-outline-dark" >Reset</button>

                            </div>

                        </form>
                        <div className="dropdown-divider white "></div>
                        <div>



                            <a className=" text-decoration-none p-3 text-dark" >New around here? <Link className=" text-decoration-none text-dark" to='/register'><strong>Sign up</strong></Link></a>

                        </div>

                    </div>

                    </Slide >

                    <ToastContainer />
                </div>
            </div>


        </div>
    )
}

export default LoginPage

