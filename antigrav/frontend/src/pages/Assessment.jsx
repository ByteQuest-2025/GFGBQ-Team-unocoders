import React, { useState, useEffect } from 'react';
import { AssessmentProvider, useAssessment } from '../context/AssessmentContext';
import BasicInfoStep from '../components/Wizard/BasicInfoStep';
import ClinicalVitalsStep from '../components/Wizard/ClinicalVitalsStep';
import DetailedHistoryStep from '../components/Wizard/DetailedHistoryStep';
import ResultsDashboard from '../components/ResultsDashboard';
import CursorGlow from '../components/CursorGlow';
import HealthChatbot from '../components/HealthChatbot';
import { useNavigate } from 'react-router-dom';

const WizardContainer = () => {
    const { step } = useAssessment();
    const [renderStep, setRenderStep] = useState(step);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        if (step !== renderStep) {
            setIsTransitioning(true);
            setTimeout(() => {
                setRenderStep(step);
                setIsTransitioning(false);
            }, 300);
        }
    }, [step, renderStep]);

    const getComponent = () => {
        switch (renderStep) {
            case 1: return <BasicInfoStep />;
            case 2: return <ClinicalVitalsStep />;
            case 3: return <DetailedHistoryStep />;
            case 4: return <ResultsDashboard />;
            default: return <ResultsDashboard />;
        }
    };

    return (
        <div className={`flex-1 transition-all duration-300 transform ${isTransitioning ? 'opacity-0 translate-y-4 filter blur-sm' : 'opacity-100 translate-y-0 filter blur-0'}`}>
            {getComponent()}
        </div>
    );
};

const Sidebar = () => {
    const { step, theme, toggleTheme } = useAssessment();
    const steps = [
        { id: 1, label: 'Patient Profile', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
        { id: 2, label: 'Clinical Vitals', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
        { id: 3, label: 'Medical History', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
        { id: 4, label: 'Risk Analysis', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' }
    ];

    return (
        <div className="w-80 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col h-screen fixed left-0 top-0 z-50 p-6 shadow-[4px_0_24px_rgba(0,0,0,0.02)] transition-colors duration-300">
            <div className="mb-12 flex items-center gap-3">
                <div className="bg-gradient-to-br from-cyan-400 to-teal-500 p-2.5 rounded-xl shadow-lg shadow-cyan-500/20">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>
                <div>
                    <h1 className="font-bold text-xl text-slate-900 dark:text-white tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">SilentRisk AI</h1>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">Dashboard</span>
                </div>
            </div>

            <nav className="space-y-2 flex-1">
                {steps.map((s) => {
                    const isActive = step === s.id;
                    const isPast = step > s.id;

                    return (
                        <div
                            key={s.id}
                            className={`flex items-center gap-4 px-4 py-4 rounded-2xl transition-all duration-500 ${isActive
                                ? 'bg-gradient-to-r from-cyan-500/10 to-teal-500/5 text-cyan-700 dark:text-cyan-400 shadow-sm border border-cyan-100/50 dark:border-cyan-900/30'
                                : isPast
                                    ? 'text-slate-400 opacity-60'
                                    : 'text-slate-400 dark:text-slate-500'
                                }`}
                        >
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${isActive
                                ? 'bg-gradient-to-br from-cyan-400 to-teal-500 text-white shadow-lg shadow-cyan-500/30'
                                : 'bg-slate-50 dark:bg-slate-800 text-slate-400'
                                }`}>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={s.icon} /></svg>
                            </div>
                            <span className={`font-bold text-sm tracking-wide ${isActive ? 'font-black' : 'font-medium'}`}>{s.label}</span>
                            {isActive && (
                                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></div>
                            )}
                        </div>
                    );
                })}
            </nav>

            {/* Theme Toggle */}
            <div className="mb-6 px-4">
                <button
                    onClick={toggleTheme}
                    className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 group transition-all"
                >
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-700 shadow-sm flex items-center justify-center text-slate-400 dark:text-slate-300">
                            {theme === 'dark' ? (
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                            ) : (
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                            )}
                        </div>
                        <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
                    </div>
                </button>
            </div>

            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                <h4 className="font-bold text-slate-800 text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    System Status
                </h4>
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Engine Online
                </div>
                <p className="mt-3 text-[10px] text-slate-400 leading-relaxed font-medium">
                    Not a medical diagnosis tool. For screening only.
                </p>
            </div>
        </div>
    );
};

const Assessment = () => {
    return (
        <AssessmentProvider>
            <CursorGlow />
            <HealthChatbot />

            <div className="min-h-screen font-sans text-slate-800 bg-slate-50 dark:bg-slate-900 selection:bg-cyan-100 selection:text-cyan-900 transition-colors duration-300">
                <Sidebar />
                <main className="ml-80 p-10 min-h-screen flex items-center justify-center relative">
                    {/* Background Glows matching Figma */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none"></div>
                    <div className="absolute bottom-0 left-80 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

                    <div className="w-full max-w-4xl">
                        <WizardContainer />
                    </div>
                </main>
            </div>
        </AssessmentProvider>
    );
};

export default Assessment;
