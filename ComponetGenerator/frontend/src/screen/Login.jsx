import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import googleLogo from "../assets/logo/google.gif"


const Login = ({ onLogin }) => {


    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [errMessage, seterrMessage] = useState('')
    const navigate = useNavigate();

    const BASE_URL = import.meta.env.VITE_BASE_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const body = { email, password };

        try {
            const response = await fetch(`${BASE_URL}${"/auth/login"}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            })

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem("token", data.token);
                if (typeof onLogin === 'function') {
                    onLogin();
                }
                navigate('/');
            }
            else {
                seterrMessage(data.message || "Login failed")
            }
        }
        catch (error){
            console.error("Login error:", error);
            seterrMessage(`Error while connecting to the server `)
        }
    }


    return (
        <>
            <div className='bg-gray-100'>
                <div className="flex h-fit items-center justify-center  py-8 md:py-20 lg:py-32">

                    <div className='flex flex-col items-center md:flex-row justify-around p-12 bg-white shadow-xl rounded-xl w-full max-w-2xl'>


                        <div className='flex flex-col items-center'>
                            <div>
                                <h1 className="text-xl font-semibold mb-4">Sign in</h1>
                            </div>

                            <div className='flex flex-col gap-3 w-64'>
                                <input className="p-2 border rounded"
                                    type="email"
                                    placeholder='Email'
                                    required
                                    value={email}
                                    onChange={(e) => setemail(e.target.value)}
                                />
                                <input className="p-2 border rounded"
                                    type="password"
                                    placeholder='Password'
                                    required
                                    value={password}
                                    onChange={(e) => setpassword(e.target.value)}
                                />
                                <button className= 'cursor-pointer bg-slate-800 text-white py-2 rounded' onClick={handleSubmit}>Sign In</button>

                                {errMessage && <p className="text-red-500 text-sm">{errMessage}</p>}


                                <button className='flex items-center justify-center gap-2 border py-2 rounded hover:bg-gray-100'>
                                    <img
                                        src={googleLogo}
                                        alt="Google logo"
                                        className="h-6 w-6"
                                    />
                                    <span className=" cursor-pointer text-sm text-gray-700">Continue with Google</span>
                                </button>

                                <p className=" text-sm text-center text-gray-600 mt-4">
                                    Don't have an account?{" "}
                                    <Link to="/signup" className=" cursor-pointer text-blue-500 hover:underline">
                                        Register
                                    </Link>
                                </p>


                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Login
