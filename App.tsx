import React, { useState } from 'react';
import { useAuth } from './context/AuthContext';
import { useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Sidebar, NavTab } from './components/Sidebar';
import { NotificationToast } from './components/NotificationToast';

// Views
import { LoginView } from './views/LoginView';
import { DashboardView } from './views/DashboardView';
import { InventoryView } from './views/InventoryView';
import { BorrowingView } from './views/BorrowingView';
import { ReturnView } from './views/ReturnView';
import { UsersView } from './views/UsersView';
import { HistoryView } from './views/HistoryView';

export const App: React.FC = () => {
  const { currentUser, isAdmin } = useAuth();
  const [currentTab, setCurrentTab] = useState<NavTab>('dashboard');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // If not authenticated, render Login Page
  if (!currentUser) {
    return <LoginView />;
  }

  // Safety check: if staff somehow is on users tab, redirect to dashboard
  if (currentTab === 'users' && !isAdmin) {
    setCurrentTab('dashboard');
  }

  return (
    <div className="min-h-screen bg-surface-bg flex flex-col font-sans">
      {/* Top Navbar */}
      <Navbar onToggleSidebarMobile={() => setIsMobileSidebarOpen((prev) => !prev)} />

      {/* Main Container */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto">
        {/* Sidebar */}
        <Sidebar
          currentTab={currentTab}
          onSelectTab={(tab) => setCurrentTab(tab)}
          isOpenMobile={isMobileSidebarOpen}
          onCloseMobile={() => setIsMobileSidebarOpen(false)}
        />

        {/* Content Area */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 min-w-0 overflow-y-auto">
          {currentTab === 'dashboard' && (
            <DashboardView
              onNavigate={(tab) => setCurrentTab(tab)}
              onOpenNewLoanModal={() => setCurrentTab('borrowing')}
              onOpenAddItemModal={() => setCurrentTab('inventory')}
            />
          )}

          {currentTab === 'inventory' && <InventoryView />}
          {currentTab === 'borrowing' && <BorrowingView />}
          {currentTab === 'returns' && <ReturnView />}
          {currentTab === 'users' && <UsersView />}
          {currentTab === 'history' && <HistoryView />}
        </main>
      </div>

      {/* Global Notifications */}
      <NotificationToast />
    </div>
  );
};

export default App;
