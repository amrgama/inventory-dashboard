import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppShellWrapper } from './shared/components/layout/AppShell';
import { InventoryPage } from './pages/InventoryPage';
import { DashboardPage } from './pages/DashboardPage';

function App() {
  return (
    <BrowserRouter>
      <AppShellWrapper>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/inventory" element={<InventoryPage />} />
          {/* Redirect any unknown route to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AppShellWrapper>
    </BrowserRouter>
  );
}

export default App;
