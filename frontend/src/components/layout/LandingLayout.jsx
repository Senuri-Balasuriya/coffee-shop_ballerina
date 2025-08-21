import { Outlet } from 'react-router-dom';
import LandingNavbar from './LandingNavbar';
import LandingFooter from './LandingFooter';

export default function LandingLayout() {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-x-hidden">
      <LandingNavbar />
      <Outlet />
      <LandingFooter />
    </div>
  );
}
