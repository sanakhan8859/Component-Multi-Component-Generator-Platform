import { useState } from 'react'
import { Link } from "react-router-dom"


const Navbar = ({ isLoggedIn, onLogout }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className="flex justify-between bg-slate-800 text-white font-bold p-3 items-center relative">
                <div className="flex gap-5 items-center">

                    <h1>
                        <span className="text-green-500">Ai</span>
                        <span>Code</span>
                        <span className="text-green-500">Genrator</span>
                    </h1>
                </div>

                <div className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? (

                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (

                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </div>


                <div className={`absolute md:static top-full left-0 w-full md:w-auto bg-slate-800 md:bg-transparent z-10 md:flex ${menuOpen ? 'block' : 'hidden'}`}>
                    <ul className='flex flex-col md:flex-row gap-8 items-center p-2 md:p-0 cursor-pointer'>
                        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                        <li><Link to="/Genrate" onClick={() => setMenuOpen(false)}>Genrate</Link></li>

                        {!isLoggedIn ? (
                            <>
                                <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
                            </>
                        ) :
                            <>
                                <li>
                                    <button
                                        onClick={() => { onLogout(); setMenuOpen(false); }}
                                        className="bg-red-500 px-3 py-1 rounded hover:bg-red-800 cursor-pointer"
                                    >
                                        Logout
                                    </button>
                                </li>
                            </>
                        }
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
