import React from 'react';
import { useAssessment } from '../../context/AssessmentContext';

const DetailedHistoryStep = () => {
    const { diabetesData, setDiabetesData, heartData, setHeartData, nextStep, prevStep, calculateRisk } = useAssessment();

    const handleMetabolicChange = (e) => {
        const { name, value } = e.target;
        setDiabetesData(prev => ({ ...prev, [name]: parseFloat(value) }));
    };

    const handleCardioChange = (e) => {
        const { name, value } = e.target;
        setHeartData(prev => ({ ...prev, value }));
    };

    return (
        <div className="max-w-3xl mx-auto animate-fade-in-up">
            <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-cyan-50 text-cyan-600 mb-5 shadow-sm border border-cyan-100">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                </div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Detailed History</h2>
                <p className="text-slate-500 dark:text-slate-400 mt-2">Specific symptoms & risk factors.</p>
            </div>

            <div className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-xl p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 dark:border-slate-700 space-y-8">

                {/* Chest Pain Selection */}
                <div>
                    <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3 pl-1">Chest Pain Type</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {['typical', 'atypical', 'non-anginal', 'asymptomatic'].map(type => (
                            <button
                                key={type}
                                onClick={() => setHeartData(prev => ({ ...prev, chestPain: type }))}
                                className={`py-4 px-2 rounded-xl text-xs font-bold uppercase tracking-wider border-2 transition-all ${heartData.chestPain === type
                                    ? 'bg-cyan-50 dark:bg-cyan-900/30 border-cyan-500 text-cyan-700 dark:text-cyan-400 shadow-sm'
                                    : 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-slate-400 hover:border-cyan-200 dark:hover:border-cyan-800'
                                    }`}
                            >
                                {type.replace('-', ' ')}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Additional Inputs */}
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Family History */}
                    <div>
                        <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 pl-1">Family History</label>
                        <div className="flex bg-slate-100 dark:bg-slate-900 p-1 rounded-xl">
                            <button
                                onClick={() => setDiabetesData(prev => ({ ...prev, familyHistory: true }))}
                                className={`flex-1 py-3 rounded-lg font-bold text-sm transition-all ${diabetesData.familyHistory ? 'bg-white dark:bg-slate-800 text-teal-600 dark:text-teal-400 shadow-sm' : 'text-slate-400'}`}
                            >
                                Yes
                            </button>
                            <button
                                onClick={() => setDiabetesData(prev => ({ ...prev, familyHistory: false }))}
                                className={`flex-1 py-3 rounded-lg font-bold text-sm transition-all ${!diabetesData.familyHistory ? 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 shadow-sm' : 'text-slate-400'}`}
                            >
                                No
                            </button>
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 pl-1">Exercise Angina</label>
                        <div className="flex bg-slate-100 dark:bg-slate-900 p-1 rounded-xl">
                            <button onClick={() => setHeartData(prev => ({ ...prev, exerciseAngina: true }))} className={`flex-1 py-3 rounded-lg font-bold text-sm transition-all ${heartData.exerciseAngina ? 'bg-white dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 shadow-sm' : 'text-slate-400'}`}>Yes</button>
                            <button onClick={() => setHeartData(prev => ({ ...prev, exerciseAngina: false }))} className={`flex-1 py-3 rounded-lg font-bold text-sm transition-all ${!heartData.exerciseAngina ? 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 shadow-sm' : 'text-slate-400'}`}>No</button>
                        </div>
                    </div>
                    {/* Thalassemia Select */}
                    <div>
                        <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 pl-1">Thalassemia</label>
                        <select
                            name="thalassemia"
                            value={heartData.thalassemia}
                            onChange={(e) => setHeartData(prev => ({ ...prev, thalassemia: e.target.value }))}
                            className="w-full px-5 py-3 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 focus:border-cyan-500 outline-none font-bold text-slate-700 dark:text-slate-300 appearance-none"
                        >
                            <option value="normal">Normal</option>
                            <option value="fixed">Fixed Defect</option>
                            <option value="reversible">Reversible</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="flex gap-4 mt-8">
                <button onClick={prevStep} className="w-1/3 py-4 rounded-xl font-bold text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">Back</button>
                <button onClick={calculateRisk} className="flex-1 py-4 rounded-xl font-bold text-lg text-white bg-gradient-to-r from-cyan-500 to-teal-500 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all">Generate Report</button>
            </div>
        </div>
    );
};

export default DetailedHistoryStep;
