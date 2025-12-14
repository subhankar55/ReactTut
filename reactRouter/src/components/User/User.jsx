import React from "react";
import { useParams } from "react-router-dom";

function User() {
    const { userid } = useParams(); 
    return (
        <div className="text-center bg-gray-300 w-[50%] h-[8vh] mx-auto py-4 ">User : {userid}</div>
    )
}

export default User;