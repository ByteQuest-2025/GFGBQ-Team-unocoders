import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Splash = () => {
    const navigate = useNavigate();
    const [exiting, setExiting] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setExiting(true);
            setTimeout(() => navigate('/home'), 500); // Wait for exit animation
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className={`fixed inset-0 bg-slate-900 flex flex-col items-center justify-center p-6 transition-opacity duration-700 ${exiting ? 'opacity-0' : 'opacity-100'}`}>
            <div className="text-center relative z-10 animate-fade-in-up">
                {/* Logo Icon */}
                <div className="bg-gradient-to-tr from-teal-500 to-blue-600 w-32 h-32 rounded-3xl mx-auto mb-10 flex items-center justify-center shadow-2xl shadow-teal-500/20 rotate-0 hover:rotate-3 transition-transform duration-700 ease-out cursor-default">
                    <svg className="w-16 h-16 text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                </div>

                {/* Typography */}
                <h1 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter">
                    EARLY<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">GUARD</span>
                </h1>

                <p className="text-slate-400 text-lg md:text-xl font-light tracking-wide max-w-sm mx-auto leading-relaxed">
                    Advanced AI-Driven <br /> Health Risk Assessment
                </p>

                {/* Loading Line */}
                <div className="mt-16 w-48 h-1 bg-slate-800 rounded-full mx-auto overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-teal-500 to-blue-500 w-1/3 rounded-full animate-[shimmer_2s_infinite]"></div>
                </div>
            </div>

            {/* Background Atmosphere */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-teal-600/10 rounded-full blur-[120px]"></div>
            </div>
        </div>
    );
};

export default Splash;
