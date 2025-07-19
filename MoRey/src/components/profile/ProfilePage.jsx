import React from 'react';
import { User, ChevronRight } from 'lucide-react';

export const ProfilePage = () => {
    return (
        <div className="p-4 md:p-8 flex-grow overflow-auto">
            <h1 className="text-2xl font-bold text-text mb-6">Your Profile</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Karta przegl¹du profilu */}
                <div className="bg-card rounded-lg p-6 shadow-md">
                    <h2 className="text-xl font-semibold text-text mb-4">Overview</h2>
                    <div className="flex flex-col items-center mb-6">
                        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-lightText text-2xl font-bold mb-4">
                            P
                        </div>
                        <h3 className="text-lg font-semibold text-text">User Name</h3>
                        <p className="text-sm text-lightText">user@example.com</p>
                    </div>
                    <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center text-lightText">
                        Short Description / Bio
                    </div>
                </div>

                {/* Karta ustawieñ i osi¹gniêæ */}
                <div className="bg-card rounded-lg p-6 shadow-md">
                    <h2 className="text-xl font-semibold text-text mb-4">Settings & Achievements</h2>
                    <div className="flex flex-col space-y-4">
                        <button className="flex items-center justify-between p-3 bg-gray-100 rounded-lg text-text hover:bg-gray-200 transition-colors">
                            Account Settings <ChevronRight size={18} />
                        </button>
                        <button className="flex items-center justify-between p-3 bg-gray-100 rounded-lg text-text hover:bg-gray-200 transition-colors">
                            Privacy <ChevronRight size={18} />
                        </button>
                        <div className="h-24 bg-gray-100 rounded-lg flex items-center justify-center text-lightText">
                            Achievements / Badges
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
