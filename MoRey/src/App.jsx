import React, { useState } from 'react';

// Importuj komponenty z ich dedykowanych plików, u¿ywaj¹c importów nazwanych
import { Header } from './components/common/Header';
import { SideNavigation } from './components/common/SideNavigation';
import { BottomNavigation } from './components/common/BottomNavigation';
import { DashboardPage } from './components/dashboard/DashboardPage';
import { ReportsPage } from './components/reports/ReportsPage';
import { GoalsPage } from './components/goals/GoalsPage';
import { PlannerPage } from './components/planner/PlannerPage';
import { ForumPage } from './components/forum/ForumPage';
import { ProfilePage } from './components/profile/ProfilePage';


// Main App Component
const App = () => {
    const [currentPage, setCurrentPage] = useState('Dashboard');

    const renderPage = () => {
        switch (currentPage) {
            case 'Dashboard':
                return <DashboardPage />;
            case 'Reports':
                return <ReportsPage />;
            case 'Goals':
                return <GoalsPage />;
            case 'Planner':
                return <PlannerPage />;
            case 'Forum':
                return <ForumPage />;
            case 'Profile':
                return <ProfilePage />;
            default:
                return <DashboardPage />;
        }
    };

    return (
        <div className="flex flex-col md:flex-row h-screen bg-background font-inter">
            {/* Tailwind CSS CDN dla celów deweloperskich. W prawdziwym projekcie skonfigurowa³byœ PostCSS */}
            <script src="https://cdn.tailwindcss.com"></script>

            {/* Side Navigation dla desktopu */}
            <SideNavigation setCurrentPage={setCurrentPage} currentPage={currentPage} />

            <div className="flex flex-col flex-1 min-h-0">
                {/* Header dla mobile */}
                <Header currentPage={currentPage} />

                {/* G³ówny obszar zawartoœci */}
                <main className="flex-1 overflow-y-auto pb-20 md:pb-0">
                    {renderPage()}
                </main>

                {/* Bottom Navigation dla mobile */}
                <BottomNavigation setCurrentPage={setCurrentPage} currentPage={currentPage} />
            </div>
        </div>
    );
};

export default App;
