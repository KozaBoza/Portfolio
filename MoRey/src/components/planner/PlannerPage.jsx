import React, { useState } from 'react';
import { Calendar } from 'lucide-react'; // Example: if Calendar is used here

export const PlannerPage = () => {
    const [timeframe, setTimeframe] = useState('Daily'); // Daily, Weekly, Monthly

    return (
        <div className="p-4 md:p-8 flex-grow overflow-auto">
            <h1 className="text-2xl font-bold text-text mb-6">Planner</h1>
            <div className="flex space-x-2 mb-6">
                <button
                    className={`px-4 py-2 rounded-lg font-semibold ${timeframe === 'Daily' ? 'bg-primary text-white' : 'bg-gray-200 text-lightText'
                        }`}
                    onClick={() => setTimeframe('Daily')}
                >
                    Daily
                </button>
                <button
                    className={`px-4 py-2 rounded-lg font-semibold ${timeframe === 'Weekly' ? 'bg-primary text-white' : 'bg-gray-200 text-lightText'
                        }`}
                    onClick={() => setTimeframe('Weekly')}
                >
                    Weekly
                </button>
                <button
                    className={`px-4 py-2 rounded-lg font-semibold ${timeframe === 'Monthly' ? 'bg-primary text-white' : 'bg-gray-200 text-lightText'
                        }`}
                    onClick={() => setTimeframe('Monthly')}
                >
                    Monthly
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Karta prognoz */}
                <div className="bg-card rounded-lg p-6 shadow-md">
                    <h2 className="text-xl font-semibold text-text mb-4">Predictions</h2>
                    <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center text-lightText">
                        Prediction Chart/Data
                    </div>
                </div>

                {/* Karta zadañ i limitów */}
                <div className="bg-card rounded-lg p-6 shadow-md">
                    <h2 className="text-xl font-semibold text-text mb-4">To Do & Limits</h2>
                    <div className="flex flex-col space-y-4">
                        <div className="h-24 bg-gray-100 rounded-lg flex items-center justify-center text-lightText">
                            To Do List
                        </div>
                        <div className="h-24 bg-gray-100 rounded-lg flex items-center justify-center text-lightText">
                            Limits/Budget
                        </div>
                        <button className="bg-secondary text-white py-3 rounded-lg font-semibold w-full shadow-md hover:bg-secondary/90 transition-colors">
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
