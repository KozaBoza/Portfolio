import React from 'react';
import { BarChart2, Target, Calendar, MessageSquare, User } from 'lucide-react';

export const BottomNavigation = ({ setCurrentPage, currentPage }) => {
    const navItems = [
        { name: 'Reports', icon: BarChart2, page: 'Reports', label: 'R' },
        { name: 'Goals', icon: Target, page: 'Goals', label: 'G' },
        { name: 'Planner', icon: Calendar, page: 'Planner', label: 'P' },
        { name: 'Forum', icon: MessageSquare, page: 'Forum', label: 'F' },
        { name: 'Profile', icon: User, page: 'Profile', label: 'P' },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-card shadow-lg p-3 flex justify-around md:hidden rounded-t-lg">
            {navItems.map((item) => (
                <button
                    key={item.name}
                    className={`flex flex-col items-center text-xs font-medium transition-colors duration-200 ${currentPage === item.page ? 'text-primary' : 'text-lightText'
                        }`}
                    onClick={() => setCurrentPage(item.page)}
                >
                    <item.icon size={20} className="mb-1" />
                    {item.label}
                </button>
            ))}
        </nav>
    );
};
