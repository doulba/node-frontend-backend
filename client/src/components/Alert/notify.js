import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Alert extends React.Component() {
    
    render() {
        return(
            <>
                <ToastContainer />
            </>
        );
    }
}

export default Alert;