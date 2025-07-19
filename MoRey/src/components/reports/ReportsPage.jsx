export const ReportsPage = () => {
    return (
        <div className="p-4 md:p-8 flex-grow overflow-auto">
            <h1 className="text-2xl font-bold text-text mb-6">Your Reports</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Statistics & Prognosis Card */}
                <div className="bg-card rounded-lg p-6 shadow-md">
                    <h2 className="text-xl font-semibold text-text mb-4">Statistics & Prognosis</h2>
                    <div className="h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-lightText">
                        Statistics Chart
                    </div>
                    <div className="h-24 bg-gray-100 rounded-lg flex items-center justify-center text-lightText">
                        Prognosis Data
                    </div>
                </div>

                {/* Balance History & Investments Card */}
                <div className="bg-card rounded-lg p-6 shadow-md">
                    <h2 className="text-xl font-semibold text-text mb-4">Balance History & Investments</h2>
                    <div className="h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-lightText">
                        Balance History Chart
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div className="h-16 bg-gray-100 rounded-lg flex items-center justify-center text-lightText">
                            Investments
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