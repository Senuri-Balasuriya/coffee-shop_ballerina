import { Route, Routes } from 'react-router-dom';
// Layouts
import AppLayout from './components/layout/AppLayout';
import AuthLayout from './components/layout/AuthLayout';
import LandingLayout from './components/layout/LandingLayout';
// Pages
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ProductListPage from './pages/ProductListPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import OrderDetailPage from './pages/OrderDetailPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import ProfilePage from './pages/ProfilePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsAndConditions from './pages/TermsAndConditions';
import AddToCartPage from './pages/AddToCartPage';
import ProceedToCheckoutPage from './pages/ProceedToCheckoutPage';
import TrackOrderPage from './pages/TrackOrderPage';

import ContactPage from './pages/ContactPage';
import AboutUsPage from './pages/AboutUsPage';

export default function Router() {
  return (
    <Routes>
      {/* Landing Page Route */}
      <Route element={<LandingLayout />}>
        <Route path="/" element={<LandingPage />} />
  <Route path="/contact" element={<ContactPage />} />
  <Route path="/about" element={<AboutUsPage />} />
      </Route>
      
      {/* Auth Routes */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
      </Route>
      
      {/* App Routes */}
      <Route element={<AppLayout />}>
        <Route path="/shop" element={<HomePage />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/orders" element={<OrderHistoryPage />} />
        <Route path="/orders/:id" element={<OrderDetailPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/cart" element={<AddToCartPage />} />
        <Route path="/checkout" element={<ProceedToCheckoutPage />} />
        <Route path="/track-order" element={<TrackOrderPage />} />
      </Route>
      
      {/* 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
