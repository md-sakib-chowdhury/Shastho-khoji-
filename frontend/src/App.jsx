import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./context/AuthContext";
import { useAuth } from "./hooks/useAuth";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import DoctorProfile from "./pages/DoctorProfile";
import { Login, Register } from "./pages/Auth";
import Appointments from "./pages/Appointments";
import Hospitals from "./pages/Hospitals";
import Tips from "./pages/Tips";
import About from "./pages/About";
import Dashboard from "./pages/admin/Dashboard";
import ManageDoctors from "./pages/admin/ManageDoctors";
import ManageAppointments from "./pages/admin/ManageAppointments";
import ManageUsers from "./pages/admin/ManageUsers";
import ManageBanners from "./pages/admin/ManageBanners";
import ManageBlogs from "./pages/admin/ManageBlogs";

const queryClient = new QueryClient();

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return <div className="min-h-screen flex items-center justify-center"><p className="text-gray-400">লোড হচ্ছে...</p></div>;
  return user ? children : <Navigate to="/login" />;
}

function AdminRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return <div className="min-h-screen flex items-center justify-center"><p className="text-gray-400">লোড হচ্ছে...</p></div>;
  return user?.role === "admin" ? children : <Navigate to="/" />;
}

function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<><Navbar /><Home /></>} />
      <Route path="/search" element={<><Navbar /><Search /></>} />
      <Route path="/doctor/:id" element={<><Navbar /><DoctorProfile /></>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/hospitals" element={<><Navbar /><Hospitals /></>} />
      <Route path="/tips" element={<><Navbar /><Tips /></>} />
      <Route path="/about" element={<><Navbar /><About /></>} />
      <Route path="/appointments" element={<ProtectedRoute><><Navbar /><Appointments /></></ProtectedRoute>} />

      {/* Admin Routes */}
      <Route path="/admin" element={<AdminRoute><Dashboard /></AdminRoute>} />
      <Route path="/admin/doctors" element={<AdminRoute><ManageDoctors /></AdminRoute>} />
      <Route path="/admin/appointments" element={<AdminRoute><ManageAppointments /></AdminRoute>} />
      <Route path="/admin/users" element={<AdminRoute><ManageUsers /></AdminRoute>} />
      <Route path="/admin/banners" element={<AdminRoute><ManageBanners /></AdminRoute>} />
      <Route path="/admin/blogs" element={<AdminRoute><ManageBlogs /></AdminRoute>} />

      {/* 404 */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}