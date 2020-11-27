import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toaster = () => {
  return (
    <ToastContainer position="bottom-center" autoClose={5000} pauseOnHover />
  );
};

export default Toaster;
