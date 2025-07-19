import React from 'react';
import { Settings, Bell } from 'lucide-react';

export const Header = ({ currentPage }) => {
    return (
        <header className="flex items-center justify-between p-4 bg-card shadow-sm md:hidden">
            <div className="flex items-center space-x-2">
                {/* Placeholder dla awatara u¿ytkownika */}
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">U</div>
                <span className="text-lg font-semibold text-text">{currentPage}</span>
            </div>
            <div className="flex items-center space-x-4">
                <Bell size={20} className="text-lightText" />
                <Settings size={20} className="text-lightText" />
            </div>
        </header>
    );
};
