import React from 'react';
import { MessageSquare, BookOpen, List, Users, Mail } from 'lucide-react';

export const ForumPage = () => {
    return (
        <div className="p-4 md:p-8 flex-grow overflow-auto">
            <h1 className="text-2xl font-bold text-text mb-6">Forum</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Karta czatu i alertów */}
                <div className="bg-card rounded-lg p-6 shadow-md">
                    <h2 className="text-xl font-semibold text-text mb-4">Chat & Alerts</h2>
                    <input
                        type="text"
                        placeholder="Search forum..."
                        className="w-full p-3 mb-4 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <div className="h-32 bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-lightText">
                        Chat Window
                    </div>
                    <div className="h-16 bg-gray-100 rounded-lg flex items-center justify-center text-lightText">
                        Alerts
                    </div>
                </div>

                {/* Karta mini kursów, zadañ, znajomych */}
                <div className="bg-card rounded-lg p-6 shadow-md">
                    <h2 className="text-xl font-semibold text-text mb-4">Community</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-gray-100 rounded-lg flex flex-col items-center justify-center text-lightText">
                            <BookOpen size={24} className="mb-2" />
                            Mini Courses
                        </div>
                        <div className="p-4 bg-gray-100 rounded-lg flex flex-col items-center justify-center text-lightText">
                            <List size={24} className="mb-2" />
                            Tasks
                        </div>
                        <div className="p-4 bg-gray-100 rounded-lg flex flex-col items-center justify-center text-lightText">
                            <Users size={24} className="mb-2" />
                            Friends
                        </div>
                        <div className="p-4 bg-gray-100 rounded-lg flex flex-col items-center justify-center text-lightText">
                            <Mail size={24} className="mb-2" />
                            Messages
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
