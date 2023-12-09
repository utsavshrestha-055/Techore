import { Button } from "react-bootstrap";
import { CgProfile } from "react-icons/cg";
import { MdDriveFolderUpload } from "react-icons/md";
import React from "react";
import { SlCalender } from "react-icons/sl";

const internship = () => {
  return (
    <div className="intership-wrapper">
      <div className="intership-info">
        Fill up the details to apply for intership in techore company.
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
            <label>
              DOB {""}
              {"(yyyy/mm/dd)"}
            </label>{" "}
            <input placeholder="Enter your first name" type="text" />
          </div>
          <div className="form-label">
            <label>Address</label>{" "}
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
            <label>Position to apply for</label>{" "}
            <input placeholder="Enter your first name" type="text" />
          </div>
          <div className="form-label">
            <label>Qualification</label>{" "}
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
            <label>Citizenship number</label>{" "}
            <input placeholder="Enter your first name" type="text" />
          </div>
          <div className="form-label">
            <label>Issued Date</label>{" "}
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
          <div className="form-label">
            <label>Citizenship image {"(Front side)"}</label>{" "}
            <input type="file" accept="image/*" />
          </div>
          <div className="form-label">
            <label>Citizenship image {"(Back side)"}</label>{" "}
            <input type="file" accept="image/*" />
          </div>
        </div>
        <div className="form-submit-button">
          <input type="submit" placeholder="Submit"/>
        </div>
      </form>
    </div>
  );
};

export default internship;
