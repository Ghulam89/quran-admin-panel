import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./screens/dashboard/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cources from "./screens/Cources";
import Teachers from "./screens/teachers";
import CourcesDetails from "./screens/Cources/CourcesDetails";
import StudentDashboard from "./screens/StudentPanel/dashboard/StudentDashboard";
import MyCources from "./screens/StudentPanel/mycourses/MyCourses";
import StudentCourceDetails from "./screens/StudentPanel/courceDetails/CourceDetails";
import DoctorDashboard from "./screens/DoctorPanel/DoctorDashboard";
import DoctorCources from "./screens/DoctorPanel/DoctorCources";
import DoctorCourcesDetails from "./screens/DoctorPanel/CourceDetails";
function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* <Route element={<PrivateRoute />}> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cources" element={<Cources />} />
        <Route path="/cources-details" element={<CourcesDetails />} />
        <Route path="/teachers" element={<Teachers />} />

        {/* </Route> */}

        {/* student panel */}
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/my-cources" element={<MyCources />} />
        <Route path="/my-cource-details" element={<StudentCourceDetails />} />


        {/* doctor panel */}
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/doctor-cources" element={<DoctorCources />} />
        <Route path="/doctor-cource-details" element={<DoctorCourcesDetails />} />


      </Routes>
    </>
  );
}

export default App;
