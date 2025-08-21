import { Outlet } from 'react-router-dom';
import AppNavbar from './AppNavbar';
import AppFooter from './AppFooter';

export default function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <AppNavbar />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <AppFooter />
    </div>
  );
}
