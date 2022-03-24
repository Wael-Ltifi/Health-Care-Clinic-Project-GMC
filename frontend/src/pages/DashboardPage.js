import React, { useEffect } from 'react'
import AppointmentList from '../components/AppointmentList'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'



const DashboardPage = () => {

    const role = useSelector((state) => state.auth.user.role);

    const Style = {
        height: "100vh",
        backgroundImage: "url(" + "./image/profile.png" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    

    return (
        <Container  > 
            <h1 className="p-5">APPOINTMENTS MANAGEMENT</h1>
            <AppointmentList />
        </Container>


    )
}

export default DashboardPage
