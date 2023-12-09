import React, { Fragment } from 'react'

import { MdOutlinePendingActions } from "react-icons/md";
import useFetch from "../../utils/usefetch";

const Dashboard = () => {
  let client_email = localStorage.getItem('client_email');
let { data } = useFetch(
  `/api/clients?populate=*&filters[email]=${client_email}`
);
  return (
    <div className="dashboard-wrapper">
      <ul className="status-details">
        <li>
          <span>
            <MdOutlinePendingActions size={70} />
          </span>
          <h2>Projects</h2>
          <h1>Approved</h1>
        </li>
        <li>
          <span>
            <MdOutlinePendingActions size={70} />
          </span>
          <h2>Visits</h2>
          <h1>0</h1>
        </li>
        <li>
          <span>
            <MdOutlinePendingActions size={70} />
          </span>
          <h2>Appointments</h2>
          <h1>1</h1>
        </li>

      </ul>
      <div className="client-details-wrapper">
        <h1>Details</h1>
        <div className="client-details">
          {data?.data?.map((item) => (
            <Fragment>
              <span key={item.attributes.email}>
                First Name: {item.attributes.firstname}
              </span>
              <span>Last Name: {item.attributes.lastname}</span>
              <span>Address: {item.attributes.Address}</span>
            </Fragment>
          ))}

          
        </div>
      </div>
    </div>
  );
}

export default Dashboard
