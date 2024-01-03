import React from "react";

const Register = () => {
    return (
        <>
            <div className="grid place-items-center h-screen">
                    <form className="flex flex-col text-center px-10 bg-green-400 rounded">
                        <h1 className="text-7xl">Register</h1>
                        <input type="text" placeholder="First Name"/>
                        <input type="text" placeholder="Last Name"/>
                        <input type="Date" placeholder="BOD"/>
                        <input type="mail" placeholder="Email"/>
                        <input type="text" placeholder="Phone NUmber"/>
                        <input type="text" placeholder="Password"/>
                        <input type="text" placeholder="Password"/>
                        <input type="submit" value="Submit"/>
                    </form>
            </div>
        </>
    )
}

export default Register;