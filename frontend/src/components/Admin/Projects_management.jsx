import React from "react";

const Projects_management = () => {
  return (
    <div className="projects-management-wrapper">
      <div className="projects-management">
        <h1>Client's Name</h1>
        <div className="clients-projects-details">
          <span>Project's name:</span>
          <span>Status:</span>
          <span>Issued date: </span>
          <span>Submission date:</span>
        </div>
      </div>

      <div className="projects-change">
        <h1>Here you can change the project status</h1>
        <form>
          <label>Title</label>
          <input type="text" placeholder="Enter the project's title" />
          <label>Client's name</label>
          <input type="text" placeholder="Enter the client's name" />
          <label>Status</label>
          <select>
            <option value="ON HOLD">ON HOLD</option>
            <option value="IN PROGRESSING">IN PROGRESSING</option>
            <option value="TESTING">TESTING</option>
            <option value="DONE">DONE</option>
          </select>
          <input type="submit" className="blogs-add-submit-btn" />
        </form>
      </div>
      <div className="projects-change">
        <h1>Here you can delete the project</h1>
        <form>
          <label>Title</label>
          <input type="text" placeholder="Enter the project's title" />
          <label>Client's name</label>
          <input type="text" placeholder="Enter the client's name" />
          <input type="submit" className="blogs-add-submit-btn" />
        </form>
      </div>
    </div>
  );
};

export default Projects_management;
