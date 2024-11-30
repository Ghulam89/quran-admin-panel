import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./screens/dashboard/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cources from "./screens/Cources";
import Teachers from "./screens/teachers";
import CourcesDetails from "./screens/Cources/CourcesDetails";
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
      </Routes>
    </>
  );
}

export default App;
