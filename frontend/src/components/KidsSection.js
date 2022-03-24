import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'



const KidsSection = () => {

    const Style = {

        background: "transparent"

    };

    const images = [
        "./image/kid1.png",
        "./image/kid2.png",
    ]
    const [currentImage, setCurrentImage] = useState(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage(images[Math.floor(Math.random() * 2)]);
        }, 5000)

        return () => clearInterval(intervalId);
    }, [])

    return (

        <Container style={Style} className=" my-3"  >
            <section className=" text-center text-light  text-sm-start" >
                <div   >
                    <div className="  d-flex flex-wrap flex-md-nowrap align-items-center  justify-content-center">
                        <div className=" container  py-3">

                            <div className="py-2 d-md-block align-items-center text-center ">
                                <h3>YOUR CHILD will be safe in our kids space while your body relaxes</h3>
                                <Link className=" text-decoration-none text-light " to='/game'><h1>
                                    <strong >Play</strong>
                                </h1>
                                </Link>
                                <h3> click "Play" to start the game</h3>
                            </div>

                        </div  >
                        <div className=" container d-flex flex-wrap flex-md-nowrap   justify-content-end  ">


                            <img className="d-block w-100  " src={currentImage} alt="slide" />
                        </div>
                    </div>
                </div>
            </section >

        </Container>


    )
}

export default KidsSection






