import React from 'react';

import setting from "../assets/image/setting.gif";
import test from "../assets/image/test2.gif";
import mouse from "../assets/image/mouse.gif";
import camera from "../assets/image/camera.gif";
import ai from "../assets/image/ai.gif";
import result from "../assets/image/result.gif";
import { Link, useNavigate } from 'react-router-dom';

const HomeScreen = ({ isLoggedIn }) => {

    const navigate = useNavigate();

    const handleStart = () => {
        if (isLoggedIn) {
            navigate("/genrate")
        }
        else {
            navigate("/login")
        }
    }

    return (
        <div>

            <section className="bg-green-700 text-white text-center min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto leading-relaxed">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                        AI-Powered UI Component Generator
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl mb-8">
                        Instantly generate clean, reusable React components. Describe it — and let AI write your UI code.
                    </p>
                    <button onClick={handleStart} className="bg-white text-green-800  cursor-pointer   px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded shadow hover:bg-gray-400 transition ">
                        Get Started
                    </button>
                </div>
            </section>

            <section className="bg-white py-16 px-4 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold mb-10">
                    Why Use AI Component Generator?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            icon: <img src={setting} alt="Setting Icon" className="mx-auto h-12 w-12" />,
                            title: 'Instant Code Generation',
                            desc: 'Transform your UI ideas into production-ready React components in seconds.'
                        },
                        {
                            icon: <img src={test} alt="Test Icon" className="mx-auto h-12 w-12" />,
                            title: 'Customizable Output',
                            desc: 'Get JSX, CSS, and structured code tailored to your component’s functionality and design.'
                        },
                        {
                            icon: <img src={mouse} alt="Mouse Icon" className="mx-auto h-12 w-12" />,
                            title: 'No Design Skills Needed',
                            desc: 'Just describe what you want — buttons, cards, forms — and get code ready to paste.'
                        }
                    ].map((item, index) => (
                        <div key={index} className="p-6 rounded shadow bg-gray-50">
                            <p className="text-green-700 text-2xl mb-4">{item.icon}</p>
                            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-white py-16 px-4 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold mb-10">
                    How It Works
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            icon: <img src={camera} alt="Camera Icon" className="mx-auto h-12 w-12" />,
                            title: 'Enter a Prompt',
                            desc: 'Describe the UI component you want — like “responsive login form with email and password”.',
                            highlight: true
                        },
                        {
                            icon: <img src={ai} alt="AI Icon" className="mx-auto h-12 w-12" />,
                            title: 'AI Generates the Code',
                            desc: 'Our AI models generate clean JSX/TSX and CSS based on your description.',
                            highlight: true
                        },
                        {
                            icon: <img src={result} alt="Result Icon" className="mx-auto h-12 w-12" />,
                            title: 'Copy and Use',
                            desc: 'Review the code, copy it, or save it for future use — plug it straight into your project.',
                            highlight: true
                        }
                    ].map((item, index) => (
                        <div
                            key={index}
                            className={`p-6 rounded shadow ${item.highlight ? 'bg-green-200 text-green-900' : 'bg-gray-50'}`}
                        >
                            <p className="text-2xl mb-4">{item.icon}</p>
                            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-green-700 text-white text-center py-16 px-4">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                    Ready to build faster?
                </h2>
                <p className="mb-6 max-w-xl mx-auto text-base sm:text-lg">
                    Save time, skip the boilerplate, and accelerate your development with AI-powered component generation.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button onClick={handleStart} className="bg-white text-green-800 px-6 py-3 rounded shadow hover:bg-gray-400 cursor-pointer">
                        Get Started
                    </button>
                </div>
            </section>
        </div>
    );
};

export default HomeScreen;
