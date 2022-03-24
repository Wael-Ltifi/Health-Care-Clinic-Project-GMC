import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Flash from 'react-reveal/Flash';
import Fade from 'react-reveal/Fade'
import { useSpring, animated } from 'react-spring'


const MainSection = () => {

    const Style = {
        background: "transparent"
    }



    const [flip, set] = useState(false)
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0.2 },
        delay: 600,
        reset: true,
        reverse: flip,
        onRest: () => set(!flip),
    })

    return (
        <Container >
            <div className="text-white text-center  text-sm-start" >
                <div style={Style} >

                    <div className="  d-flex align-items-start d-sm-flex justify-content-end">
                        <div>
                            <row className="row-lg-">
                                <Fade>
                                    <h1 className="px-5 display-4">Body <span className="text-light "><Flash >Balance</Flash> </span>Clinic</h1>
                                </Fade>
                            </row>
                            <row>
                                <Fade>
                                    <p className=" px-5 d-md-block lead">
                                    Because Health is Happiness , Massage is great for treating many types of pain.
                                    </p>
                                </Fade>
                            </row>
                            <animated.h1 style={props}><row><Link to="/appointment"><button className="btn w-50 p-4 m-5 btn-warning"><h4 className="text-light ">BOOK AN APPOINTMENT</h4> </button></Link></row></animated.h1>
                        <Fade >
                            <row className="d-flex m-10">
                                <img className="  d-md-block img-fluid w-50 " src="./image/pub1.gif" alt="" />
                                <img className="  d-md-block img-fluid w-25 " src="./image/pub2.gif" alt="" />
                                <img className="  d-md-block img-fluid w-50 " src="./image/pub1.gif" alt="" />
                                <img className="  d-md-block img-fluid w-25 " src="./image/pub2.gif" alt="" />
                                <img className="  d-md-block img-fluid w-50 " src="./image/pub1.gif" alt="" />
                                <img className="  d-md-block img-fluid w-25 " src="./image/pub2.gif" alt="" />

                            </row>
                        </Fade>
                        </div>
                        <img className=" d-none d-md-block img-fluid w-100 " src="./image/bigSmile.png" alt="" />
                    </div>
                </div>
            </div >

        </Container>
    )
}

export default MainSection







