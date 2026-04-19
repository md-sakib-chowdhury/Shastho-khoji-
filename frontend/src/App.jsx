import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./context/AuthContext";
import { useAuth } from "./hooks/useAuth";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // ✅ import
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
import ManageAbout from "./pages/admin/ManageAbout";
import ManageHospitals from "./pages/admin/ManageHospitals";
import ManageTips from "./pages/admin/ManageTips";

const queryClient = new QueryClient();

// ✅ Public Layout — Navbar + Footer সহ
function PublicLayout({ children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
    </div>
  );
}

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
      {/* ✅ Public Routes — Footer আছে */}
      <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
      <Route path="/search" element={<PublicLayout><Search /></PublicLayout>} />
      <Route path="/doctor/:id" element={<PublicLayout><DoctorProfile /></PublicLayout>} />
      <Route path="/hospitals" element={<PublicLayout><Hospitals /></PublicLayout>} />
      <Route path="/tips" element={<PublicLayout><Tips /></PublicLayout>} />
      <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />

      {/* ✅ Protected Route — Footer আছে */}
      <Route path="/appointments" element={
        <ProtectedRoute>
          <PublicLayout><Appointments /></PublicLayout>
        </ProtectedRoute>
      } />

      {/* ⛔ Auth Routes — Footer নেই */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* ⛔ Admin Routes — Footer নেই */}
      <Route path="/admin" element={<AdminRoute><Dashboard /></AdminRoute>} />
      <Route path="/admin/doctors" element={<AdminRoute><ManageDoctors /></AdminRoute>} />
      <Route path="/admin/appointments" element={<AdminRoute><ManageAppointments /></AdminRoute>} />
      <Route path="/admin/users" element={<AdminRoute><ManageUsers /></AdminRoute>} />
      <Route path="/admin/banners" element={<AdminRoute><ManageBanners /></AdminRoute>} />
      <Route path="/admin/blogs" element={<AdminRoute><ManageBlogs /></AdminRoute>} />
      <Route path="/admin/about" element={<AdminRoute><ManageAbout /></AdminRoute>} />
      <Route path="/admin/hospitals" element={<AdminRoute><ManageHospitals /></AdminRoute>} />
      <Route path="/admin/tips" element={<AdminRoute><ManageTips /></AdminRoute>} />

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