import "./Admin.css";

import Appointments from "./Appointments";
import Blogs from "./Blogs";
import Dashboard from "./Dashboard";
import Internships from "./Internships";
import { NavLink } from "react-router-dom";
import Projects_management from "./Projects_management";
import React from "react";
import Visits from "./Visits";
import { useState } from "react";

const Admin_page = () => {
  const [dashboard, set_dashboard] = useState(true);
  const [appointments, set_appointments] = useState(false);
  const [visits, set_visits] = useState(false);
  const [internship, set_intership] = useState(false);
  const [blogs, set_blogs] = useState(false);

 const [projects_manager, set_projects_manager] = useState(false);

  const handle_dashboard = () => {
    set_dashboard(true);
    set_appointments(false);
    set_intership(false);
    set_visits(false);
    set_blogs(false);
    set_projects_manager(false);
  };
  const handle_blogs = () => {
   set_dashboard(false);
   set_appointments(false);
   set_intership(false);
   set_visits(false);
   set_blogs(true);
   set_projects_manager(false);
  };
   const handle_ourprojects = () => {
     set_dashboard(false);
     set_appointments(false);
     set_intership(false);
     set_visits(false);
     set_blogs(false);
     set_projects_manager(false);
   };
    const handle_projects_manager = () => {
      set_dashboard(false);
      set_appointments(false);
      set_intership(false);
      set_visits(false);
      set_blogs(false);
      set_projects_manager(true);
    };
     const handle_visits = () => {
       set_dashboard(false);
       set_appointments(false);
       set_intership(false);
       set_visits(true);
       set_blogs(false);
       set_projects_manager(false);
     };
  const handle_Blogs = () => {
  set_dashboard(false);
  set_appointments(false);
  set_intership(false);
  set_visits(false);
  set_blogs(true);
  set_projects_manager(false);
  };
  const handle_appointments = () => {
    set_dashboard(false);
    set_appointments(true);
    set_intership(false);
    set_visits(false);
    set_blogs(false);
    set_projects_manager(false);
  };
  const handle_intership = () => {
   set_dashboard(false);
   set_appointments(false);
   set_intership(true);
   set_visits(false);
   set_blogs(false);
   set_projects_manager(false);
  };
  return (
    <div className="get-in-touch-wrapper ">
      <div className="siderbar-wrapper">
        <div className="sidebar-items">
          <div className="subject-nav-form">
            <ul className="subject-nav-list">
              <li className="nav-link" onClick={handle_dashboard}>
                <NavLink to="/admin/dashboard">
                  <h6 className="bold">Dashboard</h6>
                </NavLink>
              </li>
              <li className="nav-link" onClick={handle_Blogs}>
                <NavLink to="/admin/blogs">
                  <h6 className="bold">Blogs</h6>
                </NavLink>
              </li>

              <li className="nav-link" onClick={handle_projects_manager}>
                <NavLink to="/admin/projects_management">
                  <h6 className="bold">Projects Manager</h6>
                </NavLink>
              </li>

              <li className="nav-link" onClick={handle_appointments}>
                <NavLink to="/admin/appointments">
                  <h6 className="bold">Appointments</h6>
                </NavLink>
              </li>

              <li className="nav-link" onClick={handle_visits}>
                <NavLink to="/admin/visits">
                  <h6 className="bold">Visits</h6>
                </NavLink>
              </li>
              <li className="nav-link" onClick={handle_intership}>
                <NavLink to="/admin/interships">
                  <h6 className="bold">Internships</h6>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="form-wrapper">
        {dashboard && <Dashboard />}
        {blogs && <Blogs />}
        {appointments && <Appointments />}
        {internship && <Internships />}
        {visits && <Visits />}
        {projects_manager && <Projects_management/>}
      </div>
    </div>
  );
};

export default Admin_page;
