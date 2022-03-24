import React from 'react'
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/actions/authActions'
import { Link } from 'react-router-dom'



const Header = () => {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()


    const mainStyle ={
        backdropFilter: "blur(30px)" ,backgroundColor:"rgb(251,251,251,0.75)"
    }

    const kidsStyle ={
        backdropFilter: "blur(30px)" ,backgroundColor:"rgba(192, 218, 234, 0.75)"
    }
    return (
        <header>
            <Navbar fixed="top"  style={ mainStyle } expand="md" >
                <Container >
                    <Link to='/'><img src={"image/Logo.png"} width="80" height="80" className="d-inline-block align-top" /></Link>
                    
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse className="collapse navbar-collapse" id="navbarLeftAlignExample">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link className="p-2 my-2 text-decoration-none text-dark" to="/aboutUs">About us </Link>
                            <Link className="p-2 my-2 text-decoration-none text-dark" to="/contactUs">Contact us</Link>
                            <NavDropdown className="p-2 font-weight-bold" title="Services" id="navbarScrollingDropdown">
                                <NavDropdown.Item ><Link className=" text-decoration-none text-dark" to="/service/1">Cranial Sacral Therapy</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link className="  text-decoration-none text-dark" to="/service/2">Cupping Therapy</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link className="  text-decoration-none text-dark" to="/service/3">Deep Tissue and Full Body Massage</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link className="  text-decoration-none text-dark" to="/service/4">Swedish Massage</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link className="  text-decoration-none text-dark" to="/service/5">Trigger Point Therapy</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link className="  text-decoration-none text-dark" to="/service/6">Warm Bamboo Massage</Link></NavDropdown.Item>
                            </NavDropdown>
                            {auth.user && auth.user.role == ("Patient") ? <Link className="p-2 my-2 text-decoration-none text-dark" to="/profile">Profile </Link> : <></>}
                            {auth.user && (auth.user.role == ("Admin")) ? <Link className="p-2 my-2 text-decoration-none  text-dark" to="/dashboard">Dashboard </Link> : <></>}
                        </Nav>
                        <Nav className="d-flex">
                            {auth.isAuth ?
                                <>

                                    <Link className=" text-decoration-none " to="/appointment"><Button  className="mx-2 " variant="outline-warning">APPOINTMENT</Button></Link>


                                    <Button onClick={() => dispatch(logout())} >LOGOUT</Button>

                                </> : <><Link to="/register"><Button  >SING UP</Button></Link>
                                    <Link to="/login"><Button className="mx-2 " variant="outline-secondary">LOGIN</Button></Link></>}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div style={{
                display: "block",
                height: "100px"
            }} > </div>
        </header >
    )
}

export default Header






