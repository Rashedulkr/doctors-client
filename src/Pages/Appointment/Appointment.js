import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppointementBanner from './AppointementBanner';
import AvailableAppintments from './AvailableAppintments';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppointementBanner date={date} setDate={setDate}></AppointementBanner>
            <AvailableAppintments date={date}></AvailableAppintments>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;