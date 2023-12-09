import './Get_in_touch.css';

import React, { useState } from 'react'
import { color, useColorMode } from "@chakra-ui/react";

import Appointments from './Appointments';
import Dashboard from './Dashboard';
import Internship from './Internship';
import { NavLink } from 'react-router-dom';
import Visits from './Visits';

const Get_in_touch = () => {
  const [dashboard,set_dashboard]=useState(true);
  const [appointments,set_appointments]=useState(false);
  const [visits,set_visits]=useState(false);
  const [internship,set_intership]=useState(false);

  const handle_dashboard=()=>{
set_dashboard(true);
set_appointments(false);
set_intership(false);
set_visits(false);
  }
  const handle_visits=()=>{
    set_dashboard(false);
    set_appointments(false);
    set_intership(false);
    set_visits(true);
      }
      const handle_appointments=()=>{
        set_dashboard(false);
        set_appointments(true);
        set_intership(false);
        set_visits(false);
          }
          const handle_intership=()=>{
            set_dashboard(false);
            set_appointments(false);
            set_intership(true);
            set_visits(false);
              }


              const { colorMode,toggleColorMode } = useColorMode();

  return (
    <div className='get-in-touch-wrapper ' style={ colorMode==='light' ? { color:'black'} : {color:'white'}}>
      <div className="siderbar-wrapper">
      <div className="sidebar-items">
        <div className="subject-nav-form">
          <ul className="subject-nav-list">
            <li className="nav-link" onClick={handle_dashboard}>
              <NavLink to="/get-in-touch/dashboard" >

                <h6 className="bold">Dashboard</h6>
              </NavLink>
            </li>
            <li className="nav-link" onClick={handle_appointments}>
              <NavLink to="/get-in-touch/appointment">

                <h6 className="bold">Appointments</h6>
              </NavLink>
            </li>

            <li className="nav-link" onClick={handle_visits}>
              <NavLink to="/get-in-touch/visit">

                <h6 className="bold">Visits</h6>
              </NavLink>
            </li>
            <li className="nav-link"  onClick={handle_intership}>
              <NavLink to="/get-in-touch/intership">

                <h6 className="bold">Internships</h6>
              </NavLink>
            </li>


          </ul>
        </div>
      </div>
      </div>
      <div className="form-wrapper">
        {dashboard && <Dashboard/>

        }
        {appointments && <Appointments/>

        }
        {internship && <Internship/>

        }
        {visits && <Visits/>

        }

      </div>

    </div>
  )
}

export default Get_in_touch
