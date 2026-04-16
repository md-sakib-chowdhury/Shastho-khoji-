import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './context/AuthContext';
import { useAuth } from './hooks/useAuth';

// এই কম্পোনেন্টগুলো চেক করুন ঠিকমতো ইম্পোর্ট হয়েছে কি না
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Search from './pages/Search';
import DoctorProfile from './pages/DoctorProfile';
import { Login, Register } from './pages/Auth';
import Appointments from './pages/Appointments';

const queryClient = new QueryClient();

function ProtectedRoute({ children }) {
  const auth = useAuth();

  // যদি useAuth undefined হয়, তার মানে হুক বা কনটেক্সটে সমস্যা
  if (!auth) {
    return <div className="text-center p-10">Auth Context missing! Check useAuth.js</div>;
  }

  const { user, loading } = auth;

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-xl font-bold">লোড হচ্ছে...</p>
    </div>
  );
  return user ? children : <Navigate to="/login" />;
}

function AppRoutes() {
  return (
    <>
      {/* ১. প্রথমে Navbar ছাড়া চেক করার জন্য নিচের লাইনটি কমেন্ট করে দেখতে পারেন */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/doctor/:id" element={<DoctorProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/appointments"
          element={
            <ProtectedRoute>
              <Appointments />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
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
