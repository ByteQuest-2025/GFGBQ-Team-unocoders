import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
            {/* Header/Nav */}
            <nav className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center shadow-sm">
                <div className="flex items-center gap-2">
                    <div className="bg-blue-600 p-2 rounded-lg">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </div>
                    <span className="font-bold text-lg text-slate-800">EarlyGuard AI</span>
                </div>
                <div className="text-sm text-slate-500">Secure & Confidential</div>
            </nav>

            {/* Main Content */}
            <main className="flex-1 max-w-5xl mx-auto w-full p-8 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 space-y-6">
                    <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full border border-blue-100 mb-2">
                        Early Detection System
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                        Proactive Health <br />
                        <span className="text-blue-600">Risk Assessment</span>
                    </h1>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Identify silent health risks before they become chronic conditions.
                        Our AI-powered analysis evaluates lab trends, lifestyle, and history to give you a personalized risk profile.
                    </p>

                    <div className="grid grid-cols-2 gap-4 py-4">
                        <div className="flex items-center gap-3">
                            <div className="bg-emerald-100 p-2 rounded-full">
                                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <span className="text-slate-700 font-medium">Heart Health</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="bg-indigo-100 p-2 rounded-full">
                                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <span className="text-slate-700 font-medium">Diabetes Risk</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="bg-amber-100 p-2 rounded-full">
                                <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <span className="text-slate-700 font-medium">Fast Analysis</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="bg-slate-100 p-2 rounded-full">
                                <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                            </div>
                            <span className="text-slate-700 font-medium">Privacy First</span>
                        </div>
                    </div>

                    <div className="pt-4">
                        <button
                            onClick={() => navigate('/assessment')}
                            className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-8 py-4 rounded-xl shadow-lg shadow-blue-200 transition-all transform hover:scale-105 flex items-center gap-2"
                        >
                            Start Assessment
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                        </button>
                        <p className="mt-4 text-xs text-slate-400 max-w-md">
                            *Disclaimer: This tool is for educational purposes only and does not constitute a medical diagnosis. Always consult with a healthcare professional.
                        </p>
                    </div>
                </div>

                <div className="flex-1 hidden md:block relative">
                    <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10"></div>
                    <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-sm mx-auto rotate-1">
                        <div className="flex items-center justify-between mb-4 border-b border-slate-50 pb-4">
                            <div className="h-4 w-24 bg-slate-200 rounded"></div>
                            <div className="h-8 w-8 bg-emerald-100 rounded-full"></div>
                        </div>
                        <div className="space-y-3">
                            <div className="h-2 w-full bg-slate-100 rounded"></div>
                            <div className="h-2 w-3/4 bg-slate-100 rounded"></div>
                            <div className="h-2 w-5/6 bg-slate-100 rounded"></div>
                            <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <div className="flex justify-between items-center mb-2">
                                    <div className="h-3 w-16 bg-slate-200 rounded"></div>
                                    <div className="h-3 w-8 bg-blue-200 rounded"></div>
                                </div>
                                <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                                    <div className="h-full w-2/3 bg-blue-500"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;
