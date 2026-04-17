// import React from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { AuthProvider } from './context/AuthContext';
// import { useAuth } from './hooks/useAuth';

// // এই কম্পোনেন্টগুলো চেক করুন ঠিকমতো ইম্পোর্ট হয়েছে কি না
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Search from './pages/Search';
// import DoctorProfile from './pages/DoctorProfile';
// import { Login, Register } from './pages/Auth';
// import Appointments from './pages/Appointments';

// const queryClient = new QueryClient();

// function ProtectedRoute({ children }) {
//   const auth = useAuth();

//   // যদি useAuth undefined হয়, তার মানে হুক বা কনটেক্সটে সমস্যা
//   if (!auth) {
//     return <div className="text-center p-10">Auth Context missing! Check useAuth.js</div>;
//   }

//   const { user, loading } = auth;

//   if (loading) return (
//     <div className="min-h-screen flex items-center justify-center">
//       <p className="text-xl font-bold">লোড হচ্ছে...</p>
//     </div>
//   );
//   return user ? children : <Navigate to="/login" />;
// }

// function AppRoutes() {
//   return (
//     <>
//       {/* ১. প্রথমে Navbar ছাড়া চেক করার জন্য নিচের লাইনটি কমেন্ট করে দেখতে পারেন */}
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/search" element={<Search />} />
//         <Route path="/doctor/:id" element={<DoctorProfile />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route
//           path="/appointments"
//           element={
//             <ProtectedRoute>
//               <Appointments />
//             </ProtectedRoute>
//           }
//         />
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//     </>
//   );
// }

// export default function App() {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <BrowserRouter>
//         <AuthProvider>
//           <AppRoutes />
//         </AuthProvider>
//       </BrowserRouter>
//     </QueryClientProvider>
//   );
// }
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
      <Route path="/appointments" element={<ProtectedRoute><><Navbar /><Appointments /></></ProtectedRoute>} />

      {/* Admin Routes */}
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