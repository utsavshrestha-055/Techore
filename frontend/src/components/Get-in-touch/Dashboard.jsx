import { MdOutlinePendingActions } from "react-icons/md";
import React from 'react'

const Dashboard = () => {

  return (
    <div className="dashboard-wrapper">
      <ul className="status-details">
        <li>
          <span>
            <MdOutlinePendingActions size={70} />
          </span>
          <h2>Pending Projects</h2>
          <h1>12</h1>
        </li>
        <li>
          <span>
            <MdOutlinePendingActions size={70} />
          </span>
          <h2>Visits</h2>
          <h1>1</h1>
        </li>
        <li>
          <span>
            <MdOutlinePendingActions size={70} />
          </span>
          <h2>Appointments</h2>
          <h1>1</h1>
        </li>
        <li>
          <span>
            <MdOutlinePendingActions size={70} />
          </span>
          <h2>Completed Projects</h2>
          <h1>12</h1>
        </li>
      </ul>
      <div className="client-details-wrapper">
        <h1>Details</h1>
        <div className="client-details">
          <span>First Name:{""}</span>
          <span>Last Name:{""}</span>
          <span>Address:{""}</span>
          <span>Projects Pending:{""}</span>
          <span>Completed Projects:{""}</span>
          <span>Appointments:{""}</span>
          <span>Visits:{""}</span>
        </div>
      </div>
    </div>
  );
}

export default Dashboard
