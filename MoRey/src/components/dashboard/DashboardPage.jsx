import React from 'react';
import { User, BarChart2, MessageSquare } from 'lucide-react';

export const DashboardPage = () => {
    return (
        <div className="p-4 md:p-8 flex-grow overflow-auto">
            <h1 className="text-2xl font-bold text-text mb-6 hidden md:block">Hello, Name</h1> {/* Tytu³ dla desktopu */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Karta przegl¹du salda/celów */}
                <div className="bg-card rounded-lg p-6 shadow-md col-span-1 md:col-span-2 lg:col-span-1">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-semibold text-text">Balance</h2>
                        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                            <span className="text-sm font-bold">C</span> {/* Placeholder dla wykresu ko³owego */}
                        </div>
                    </div>
                    <div className="w-full h-32 bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-lightText">
                        Total Balance: $XXXX.XX
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="flex flex-col items-center p-2 bg-gray-50 rounded-md">
                            <User size={24} className="text-primary mb-1" />
                            <span className="text-xs text-lightText">Users</span>
                        </div>
                        <div className="flex flex-col items-center p-2 bg-gray-50 rounded-md">
                            <BarChart2 size={24} className="text-secondary mb-1" />
                            <span className="text-xs text-lightText">Stats</span>
                        </div>
                        <div className="flex flex-col items-center p-2 bg-gray-50 rounded-md">
                            <MessageSquare size={24} className="text-accent mb-1" />
                            <span className="text-xs text-lightText">Chat</span>
                        </div>
                    </div>
                </div>

                {/* Karta ostatnich wydatków i statystyk */}
                <div className="bg-card rounded-lg p-6 shadow-md col-span-1 lg:col-span-2">
                    <h2 className="text-xl font-semibold text-text mb-4">Last Expenses & Statistics</h2>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 h-40 bg-gray-100 rounded-lg flex items-center justify-center text-lightText">
                            Last Expenses Chart
                        </div>
                        <div className="flex-1 flex flex-col space-y-4">
                            <div className="h-16 bg-gray-100 rounded-lg flex items-center justify-center text-lightText">
                                Statistics Chart
                            </div>
                            <div className="h-16 bg-gray-100 rounded-lg flex items-center justify-center text-lightText">
                                Notifications
                            </div>
                        </div>
                    </div>
                </div>

                {/* Karta subskrypcji i rozdzielania rachunków */}
                <div className="bg-card rounded-lg p-6 shadow-md col-span-1 md:col-span-2 lg:col-span-1">
                    <h2 className="text-xl font-semibold text-text mb-4">Subscriptions & Bill Splitter</h2>
                    <div className="flex flex-col space-y-4">
                        <div className="h-24 bg-gray-100 rounded-lg flex items-center justify-center text-lightText">
                            Subscriptions List
                        </div>
                        <button className="bg-secondary text-white py-3 rounded-lg font-semibold shadow-md hover:bg-secondary/90 transition-colors">
                            Bill Splitter
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
