import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import HomePage from "./pages/HomePage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import "./index.css";
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import PublicRoute from "./components/Routes/PublicRoute";
import Donor from "./pages/Dashboard/Donor";
import Hospitals from "./pages/Dashboard/Hospitals";
import Organisation from "./pages/Dashboard/Organisation";
import Consumer from "./pages/Dashboard/Consumer";
import Donation from "./pages/Donation";
import Analytics from "./pages/Dashboard/Analytics";
import DonorList from "./pages/Admin/DonorList";
import HospitalList from "./pages/Admin/HospitalList";
import OrgList from "./pages/Admin/OrgList";
import AdminHome from "./pages/Admin/AdminHome";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <ToastContainer/> */}
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminHome/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/donorList"
            element={
              <ProtectedRoute>
                <DonorList/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/hospitalList"
            element={
              <ProtectedRoute>
                <HospitalList/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/orgList"
            element={
              <ProtectedRoute>
                <OrgList/>
              </ProtectedRoute>
            }
          />
          
          <Route
            path="/analytics"
            element={
              <ProtectedRoute>
                <Analytics/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/donor"
            element={
              <ProtectedRoute>
                <Donor/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/hospital"
            element={
              <ProtectedRoute>
                <Hospitals/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/organisation"
            element={
              <ProtectedRoute>
                <Organisation/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/consumer"
            element={
              <ProtectedRoute>
                <Consumer/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/donation"
            element={
              <ProtectedRoute>
                <Donation/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
