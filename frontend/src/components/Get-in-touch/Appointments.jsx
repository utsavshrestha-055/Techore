import React from 'react'
import { Select } from '@chakra-ui/react';

const Appointments = () => {
  return (
    <div className="intership-wrapper">
      <div className="intership-info">
        Fill up the details to apply for Appointment in techore company.
      </div>
      <form className="form-box" action="submit">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "100px",
          }}
        >
          <div className="form-label">
            <label>First Name</label>{" "}
            <input placeholder="Enter your first name" type="text" />
          </div>
          <div className="form-label">
            <label>Last Name</label>{" "}
            <input placeholder="Enter your first name" type="text" />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "100px",
          }}
        >
          {" "}
          <div className="form-label">
            <label>Email</label>{" "}
            <input placeholder="Enter your first name" type="text" />
          </div>
          <div className="form-label">
            <label>Phone Number </label>{" "}
            <input placeholder="Enter your first name" type="text" />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "100px",
          }}
        >
          {" "}
          <div className="form-label">
            <label>Address</label>{" "}
            <input placeholder="Enter your first name" type="text" />
          </div>
          <div className="form-label">
            <label>Objective</label>{" "}
            <Select>
              <option value="Mobile Development">Mobile Development</option>
              <option value="Web Development">Web Development</option>
              <option value="Software Development">Software Development</option>
              <option value="IT outsourcing">IT Outsourcing</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Data Analytics">Data Analytics</option>
              <option value="Hosting and Maintainence">
                Hosting and Maintainence
              </option>
              <option value="Training">Training</option>
            </Select>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "100px",
          }}
        >
          {" "}
          <div className="form-label">
            <label>Description about your Appointment.</label>{" "}
            <input placeholder="Enter your first name" type="text" />
          </div>
        </div>

        <div className="form-submit-button">
          <input type="submit" placeholder="Submit" />
        </div>
      </form>
    </div>
  );
}

export default Appointments
