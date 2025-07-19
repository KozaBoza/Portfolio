import React from 'react';
import { Target } from 'lucide-react'; // Example: if Target is used here

export const GoalsPage = () => {
    return (
        <div className="p-4 md:p-8 flex-grow overflow-auto">
            <h1 className="text-2xl font-bold text-text mb-6">Your Goals</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Karta postêpu celów */}
                <div className="bg-card rounded-lg p-6 shadow-md">
                    <h2 className="text-xl font-semibold text-text mb-4">Goals Progress</h2>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center text-lightText">
                            <span>Goal 1</span>
                            <span>XX%</span>
                        </div>
                        <div className="flex justify-between items-center text-lightText">
                            <span>Goal 2</span>
                            <span>XX%</span>
                        </div>
                        <div className="flex justify-between items-center text-lightText">
                            <span>Goal 3</span>
                            <span>XX%</span>
                        </div>
                    </div>
                    <button className="mt-6 bg-primary text-white py-3 rounded-lg font-semibold w-full shadow-md hover:bg-primary/90 transition-colors">
                        Add Goal
                    </button>
                </div>

                {/* Karta ¿¹dañ i osi¹gniêtych celów */}
                <div className="bg-card rounded-lg p-6 shadow-md">
                    <h2 className="text-xl font-semibold text-text mb-4">Requests & Achieved</h2>
                    <div className="flex flex-col space-y-4">
                        <div className="h-24 bg-gray-100 rounded-lg flex items-center justify-center text-lightText">
                            Requests
                        </div>
                        <div className="h-24 bg-gray-100 rounded-lg flex items-center justify-center text-lightText">
                            Achieved Goals
                        </div>
                        <button className="bg-accent text-white py-3 rounded-lg font-semibold w-full shadow-md hover:bg-accent/90 transition-colors">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
