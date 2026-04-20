import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./context/AuthContext";
import { useAuth } from "./hooks/useAuth";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Search from "./pages/Search";
import DoctorProfile from "./pages/DoctorProfile";
import { Login, Register } from "./pages/Auth";
import Appointments from "./pages/Appointments";
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
  if (!user) return <Navigate to="/login" />;
  return children;
}

function AdminRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return <div className="min-h-screen flex items-center justify-center"><p className="text-gray-400">লোড হচ্ছে...</p></div>;
  if (!user) return <Navigate to="/login" />;
  if (user.role !== "admin") return <Navigate to="/" />;
  return children;
}

function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
      <Route path="/search" element={<PublicLayout><Search /></PublicLayout>} />
      <Route path="/doctor/:id" element={<PublicLayout><DoctorProfile /></PublicLayout>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/appointments" element={<ProtectedRoute><PublicLayout><Appointments /></PublicLayout></ProtectedRoute>} />
      <Route path="/admin" element={<AdminRoute><Dashboard /></AdminRoute>} />
      <Route path="/admin/doctors" element={<AdminRoute><ManageDoctors /></AdminRoute>} />
      <Route path="/admin/appointments" element={<AdminRoute><ManageAppointments /></AdminRoute>} />
      <Route path="/admin/users" element={<AdminRoute><ManageUsers /></AdminRoute>} />
      <Route path="/admin/banners" element={<AdminRoute><ManageBanners /></AdminRoute>} />
      <Route path="/admin/blogs" element={<AdminRoute><ManageBlogs /></AdminRoute>} />
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