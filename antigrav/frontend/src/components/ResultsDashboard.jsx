import React from 'react';
import { useAssessment } from '../context/AssessmentContext';
import RiskCard from '../RiskCard';

const ResultsDashboard = () => {
    const {
        userInfo,
        diabetesData,
        heartData,
        diabetesRisk,
        heartRisk,
        overallRisk,
        isVerified,
        jumpToStep,
        debugLog // GET DEBUG LOG
    } = useAssessment();

    // Generate Dynamic Explanations based on Data
    const explanations = [];
    if (parseFloat(diabetesData.glucose) > 140) explanations.push("High fasting glucose suggesting insulin resistance.");
    if (parseFloat(diabetesData.bmi) > 30) explanations.push("BMI indicates elevated metabolic risk factors.");
    if (heartData.chestPain !== 'typical' && heartData.chestPain !== '0') explanations.push("Reported chest pain aligns with angina patterns.");
    if (heartData.exerciseAngina) explanations.push("Exercise-induced angina is a significant cardiac indicator.");
    if (parseFloat(heartData.cholesterol) > 240) explanations.push("Elevated serum cholesterol levels detected.");

    // Default explanation if healthy
    if (explanations.length === 0) explanations.push("Key biometric markers are within optimal ranges.");

    return (
        <div className="animate-fade-in-up pb-20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
                <div>
                    <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 rounded-full text-xs font-bold uppercase tracking-wider border border-teal-100 dark:border-teal-800">
                        <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                        Analysis Complete
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Health Report for <span className="text-teal-600 dark:text-teal-400">{userInfo.name || 'Patient'}</span></h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg">AI-powered evaluation of metabolic and cardiovascular indicators.</p>
                </div>
                <div className="text-right hidden md:block">
                    {isVerified ? (
                        <div className="inline-flex items-center gap-1.5 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-3 py-1.5 rounded-full border border-emerald-100 dark:border-emerald-800 shadow-sm mb-2">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                            <span className="text-xs font-bold uppercase tracking-wider">Verified ML Output</span>
                        </div>
                    ) : (
                        <div className="inline-flex items-center gap-1.5 bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 px-3 py-1.5 rounded-full border border-amber-100 dark:border-amber-800 shadow-sm mb-2">
                            <span className="text-xs font-bold uppercase tracking-wider">Offline Estimate</span>
                        </div>
                    )}
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Report ID</p>
                    <p className="font-mono text-slate-600 dark:text-slate-300 font-bold bg-white dark:bg-slate-800 px-2 py-1 rounded border border-slate-100 dark:border-slate-700 shadow-sm mt-1">#{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                    <button
                        onClick={() => jumpToStep(1)}
                        className="text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 underline decoration-2 decoration-cyan-200 mt-2 block ml-auto"
                    >
                        New Assessment
                    </button>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
                <RiskCard
                    label="Diabetes Probability"
                    score={diabetesRisk}
                    level={diabetesRisk > 60 ? 'high' : diabetesRisk > 30 ? 'moderate' : 'low'}
                    type="red"
                />
                <RiskCard
                    label="Heart Disease Probability"
                    score={heartRisk}
                    level={heartRisk > 60 ? 'high' : heartRisk > 30 ? 'moderate' : 'low'}
                    type="blue"
                />
                <RiskCard
                    label="Overall Composite Risk"
                    score={overallRisk}
                    level={overallRisk > 60 ? 'high' : overallRisk > 30 ? 'moderate' : 'low'}
                    type="purple"
                />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-8">
                    <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 dark:border-slate-700 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-5 transition-transform duration-700 group-hover:scale-110">
                            <svg className="w-32 h-32 text-indigo-900 dark:text-indigo-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S5.522 17.057 10 3z" clipRule="evenodd" /></svg>
                        </div>
                        <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-6 flex items-center gap-3 relative z-10">
                            <div className="p-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg border border-indigo-100 dark:border-indigo-800">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            Key Clinical Insights
                        </h3>
                        <div className="space-y-4 relative z-10">
                            {explanations.map((exp, i) => (
                                <div key={i} className="flex gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700 hover:border-indigo-100 transition-colors">
                                    <span className="mt-1.5 w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0 shadow-[0_0_8px_rgba(99,102,241,0.6)]"></span>
                                    <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">{exp}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-slate-800 dark:to-slate-800/80 p-6 rounded-3xl border border-teal-100/50 dark:border-slate-700 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-teal-400/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                        <h4 className="font-bold text-teal-900 dark:text-teal-400 mb-6 flex items-center gap-2 relative z-10">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                            Profile Metrics
                        </h4>
                        <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400 relative z-10">
                            {[
                                { label: 'Glucose', val: `${diabetesData.glucose} mg / dL` },
                                { label: 'Resting BP', val: `${diabetesData.bp} mmHg` },
                                { label: 'Cholesterol', val: `${heartData.cholesterol} mg / dL` },
                                { label: 'BMI', val: diabetesData.bmi },
                                { label: 'Max HR', val: `${heartData.maxHeartRate} bpm` }
                            ].map((item, idx) => (
                                <div key={idx} className="flex justify-between items-center p-3 bg-white/60 dark:bg-slate-900/50 rounded-xl border border-white/50 dark:border-slate-700 shadow-sm backdrop-blur-sm">
                                    <span className="text-slate-500 dark:text-slate-500 font-medium">{item.label}</span>
                                    <span className="font-bold text-slate-800 dark:text-slate-200">{item.val}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-3xl border border-amber-100 dark:border-amber-900/30">
                        <h4 className="font-bold text-amber-800 dark:text-amber-500 mb-3 text-xs uppercase tracking-widest flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                            Disclaimer
                        </h4>
                        <p className="text-xs text-amber-800/80 dark:text-amber-500/80 leading-relaxed font-medium">
                            This analysis uses predictive modeling for educational screening only. It does not constitute a medical diagnosis. Please consult a specialist.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ResultsDashboard;
