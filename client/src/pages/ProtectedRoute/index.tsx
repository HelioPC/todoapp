import React from "react";
import { Outlet, Route, Navigate, useParams } from "react-router-dom";
import { useUser } from "../../contexts/User";
import Sidebar from "../../components/Sidebar";

const ProtectedRoute = () => {
    const { validUser } = useUser()

    return (validUser) ? (
        <div className='flex sm:flex-row flex-col w-full h-screen bg-white'>
            <Sidebar />
            
            <div className='flex-1 sm:h-screen h-[90vh] overflow-y-scroll text-black'>
                <Outlet />
            </div>
        </div>
    ) : <Navigate to="/sign" />;
};

export default ProtectedRoute;