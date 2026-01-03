import React from 'react';
import { useAssessment } from '../../context/AssessmentContext';

const BasicInfoStep = () => {
    const { userInfo, setUserInfo, nextStep } = useAssessment();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo(prev => ({ ...prev, [name]: value }));
    };

    const isComplete = userInfo.name && userInfo.age && userInfo.sex;

    return (
        <div className="max-w-xl mx-auto animate-fade-in-up">
            <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-teal-50 text-teal-600 mb-5 shadow-sm border border-teal-100">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </div>
                <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Patient Profile</h2>
                <p className="text-slate-500 mt-2">Initialize risk assessment session.</p>
            </div>

            <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 space-y-8">
                <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 pl-1">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        value={userInfo.name}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl bg-white border-2 border-slate-100 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all outline-none font-medium text-slate-800 placeholder:text-slate-300"
                        placeholder="Ex. Sarah Connor"
                    />
                </div>

                <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 pl-1">Age</label>
                    <input
                        type="number"
                        name="age"
                        value={userInfo.age}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl bg-white border-2 border-slate-100 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all outline-none font-medium text-slate-800 placeholder:text-slate-300"
                        placeholder="Years"
                    />
                </div>

                <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 pl-1">Biological Sex</label>
                    <div className="grid grid-cols-2 gap-4">
                        {['male', 'female'].map(gender => (
                            <button
                                key={gender}
                                onClick={() => setUserInfo(prev => ({ ...prev, sex: gender }))}
                                className={`py-4 px-6 rounded-xl font-bold border-2 transition-all flex items-center justify-center gap-2 capitalize ${userInfo.sex === gender
                                        ? 'bg-teal-50 border-teal-500 text-teal-700 shadow-sm'
                                        : 'bg-white border-slate-100 text-slate-400 hover:border-teal-200 hover:text-teal-600'
                                    }`}
                            >
                                {gender}
                            </button>
                        ))}
                    </div>
                </div>

                <button
                    onClick={nextStep}
                    disabled={!isComplete}
                    className={`w-full py-4 rounded-xl font-bold text-lg tracking-wide transition-all shadow-lg transform active:scale-[0.98] ${isComplete
                            ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-teal-500/30 hover:shadow-teal-500/40 hover:-translate-y-0.5'
                            : 'bg-slate-100 text-slate-300 cursor-not-allowed shadow-none'
                        }`}
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

export default BasicInfoStep;
