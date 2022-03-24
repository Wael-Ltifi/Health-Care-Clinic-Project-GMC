import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import Slide from 'react-reveal/Slide'
const AboutUsPage = () => {
    const sectionStyle = {
        backgroundImage: "url(" + "./image/BG-aboutUs.jpg" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }



    return (
        <div >
            <Container style={sectionStyle} >
                <section className="  text-light text-center  text-sm-start  p-5" >
                    <div   >
                        <div className="  d-flex flex-wrap flex-lg-nowrap align-items-center  justify-content-end">
                            <div className=" container  ">
                                <Slide left>
                                    <h6 style={{ color: "white" }} className="py-2 d-md-block  ">
                                        <h2 >ABOUT US
                                        </h2>
                                        We provide team-based, comprehensive care for patients of all ages. We are a health focused massage clinic and because of this we offer products and services that you won’t find at your typical massage spa. The services we provide were chosen specifically from our years of experience and are tailored for every individual to help them heal, manage or get rid of their pain completely.
                                    </h6>
                                </Slide>
                            </div  >
                            
                                <div className=" container  p-3">
                                    <Carousel fade>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src="./image/team1.jpg"
                                                alt="First slide"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src="./image/team2.jpg"
                                                alt="Second slide"
                                            />


                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            

                        </div>
                    </div>
                </section >

            </Container>
        </div>
    )
}

export default AboutUsPage
