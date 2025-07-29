import { useState, React } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import googleLogo from "../assets/logo/google.gif"

const SignUp = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [errMessage, setErrMessage] = useState('')
    const navigate = useNavigate();

    const BASE_URL = import.meta.env.VITE_BASE_URL;

    const handelSignUp = async (e) => {
        e.preventDefault();

        if (password.length < 6) {
            setErrMessage("Password must be at least 6 characters long");
            return;
        }

        const body = {
            email,
            password
        };

        try {
            const response = await fetch(`${BASE_URL}/auth/signup`, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })

            const data = await response.json();

            if (response.ok) {
                navigate("/login");
            } else {
                setErrMessage(data?.message || JSON.stringify(data) || "Sign Up failed");
            }
        } catch (error) {
            setErrMessage("Error while connecting to server");
        }
    }

    return (
        <>
            <div className='bg-gray-100 flex items-center justify-center py-8 md:py-20 lg:py-32'>
                <div className='flex flex-col items-center bg-white shadow-xl rounded-xl w-full max-w-2xl p-12'>
                    <h1 className="text-xl font-semibold mb-6">Create your account</h1>

                    <div className='flex flex-col gap-4 w-64'>
                        <input
                            className="p-2 border rounded"
                            type="email"
                            placeholder='Email'
                            required
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                        />
                        <input
                            className="p-2 border rounded"
                            type="password"
                            placeholder='Password'
                            required
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                        />

                        {errMessage && <p className="text-red-500 text-sm text-center">{errMessage}</p>}

                        <button onClick={handelSignUp} className='bg-slate-800 text-white py-2 rounded cursor-pointer'>
                            Create account
                        </button>

                        <button className='flex items-center justify-center gap-2 border py-2 rounded hover:bg-gray-100'>
                            <img src={googleLogo} alt="Google logo" className="h-6 w-6" />
                            <span className="cursor-pointer text-sm text-gray-700">SignUp with Google</span>
                        </button>

                        <p className="text-sm text-center text-gray-600 mt-6">
                            Already have an account?{" "}
                            <Link to="/login" className="text-blue-500 hover:underline">
                                Sign In
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp
