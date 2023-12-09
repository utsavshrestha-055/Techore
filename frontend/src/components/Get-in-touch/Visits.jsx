import React from 'react'
import { Select } from '@chakra-ui/react';
const Visits = () => {
  return (
    <div className="intership-wrapper">
        <div className="client-details-wrapper">
        <h1>Your visit info</h1>
        <div className="client-details">
          <span>First Name:{""}</span>
          <span>Last Name:{""}</span>
          <span>Address:{""}</span>
          <span>Date of visit:{""}</span>
          <span>Time of Visit:{""}</span>
          <span>Purpose of visit:{""}</span>
          <span>Department:{""}</span>

        </div>
        </div>
      <div className="intership-info">
        Fill up the details to apply for a visit in techore company.
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
            <label>Date of Visit</label>{" "}
            <input placeholder="Enter your first name" type="date" />
          </div>
          <div className="form-label">
            <label>Time of visit</label>{" "}
            <input placeholder="Enter your first name" type="time" />
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
            <label>Your Projects</label>{" "}
            <Select>
              <option value="Project 1">Project 1</option>
              <option value="Project 2">Project 2</option>
              <option value="Project 3">Project 3</option>
              <option value="Project 4">Project 4</option>
              <option value="Project 5">Project 5</option>
            </Select>
          </div>
          <div className="form-label">
            <label>Purpose of Visit</label>{" "}
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

export default Visits
