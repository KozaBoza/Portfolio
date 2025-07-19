import React from 'react';
import { Home, BarChart2, Target, Calendar, MessageSquare, User } from 'lucide-react';

export const SideNavigation = ({ setCurrentPage, currentPage }) => {
    const navItems = [
        { name: 'Dashboard', icon: Home, page: 'Dashboard' },
        { name: 'Reports', icon: BarChart2, page: 'Reports' },
        { name: 'Goals', icon: Target, page: 'Goals' },
        { name: 'Planner', icon: Calendar, page: 'Planner' },
        { name: 'Forum', icon: MessageSquare, page: 'Forum' },
        { name: 'Profile', icon: User, page: 'Profile' },
    ];

    return (
        <nav className="hidden md:flex flex-col w-64 bg-card shadow-lg p-4 h-full rounded-r-lg">
            <div className="flex items-center justify-center mb-8">
                {/* Logo aplikacji */}
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold">App</div>
            </div>
            {navItems.map((item) => (
                <button
                    key={item.name}
                    className={`flex items-center p-3 mb-2 rounded-lg transition-colors duration-200 ${currentPage === item.page ? 'bg-primary text-white shadow-md' : 'text-lightText hover:bg-gray-100'
                        }`}
                    onClick={() => setCurrentPage(item.page)}
                >
                    <item.icon size={20} className="mr-3" />
                    <span className="font-medium">{item.name}</span>
                </button>
            ))}
            <div className="mt-auto flex flex-col items-center">
                {/* Placeholdery dla ikon w dolnej czêœci nawigacji bocznej */}
                <div className="w-10 h-10 bg-secondary rounded-full mb-2"></div>
                <div className="w-10 h-10 bg-accent rounded-full"></div>
            </div>
        </nav>
    );
};
