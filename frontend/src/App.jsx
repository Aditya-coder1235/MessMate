import React from 'react'
import Dashboard from './pages/Dashboard'
// import UserDashboard from './pages/UserDashboard'
import Login from './pages/Login'
import UserSignup from './pages/UserSignup'
import LandingPage from './pages/LandingPage'
import {Routes,Route} from 'react-router-dom'
import CreateMess from './pages/CreateMess'
import MessInDetail from './pages/MessInDetail'
import ManageMess from './pages/ManageMess'
import EditMess from './pages/EditMess'
import AddMenu from './pages/AddMenu'
import MenuInDetail from './pages/MenuInDetail'
import EditMenu from './pages/EditMenu'
import ProtectedRoute from './routes/ProtectedRoute'
import PermissionD from './pages/PermissionD'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Services from './pages/Services'

const App = () => {
  return (
      <div>
          <Routes>
              <Route path="/" element={<LandingPage />}></Route>
              <Route path="/signup" element={<UserSignup />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/not" element={<PermissionD />}></Route>
              <Route path="/about" element={<AboutUs />}></Route>
              <Route path="/contact" element={<ContactUs />}></Route>
              <Route path="/services" element={<Services />}></Route>

              <Route element={<ProtectedRoute />}>
                  <Route path="/home" element={<Dashboard />}></Route>

                  <Route path="/createMess" element={<CreateMess />}></Route>
                  <Route path="/mess/:id" element={<MessInDetail />}></Route>
                  <Route path="/manageMess" element={<ManageMess />}></Route>
                  <Route path="/editMess/:id" element={<EditMess />}></Route>
                  <Route path="/addMenu/:id" element={<AddMenu />}></Route>
                  <Route
                      path="/menuInDetail/:id"
                      element={<MenuInDetail />}
                  ></Route>
                  <Route path="/editMenu/:id" element={<EditMenu />}></Route>
              </Route>
          </Routes>
      </div>
  );
}

export default App