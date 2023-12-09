import React from 'react'

const Internships = () => {
  return (
    <div className="admin-appointments">
      <h1>Here you can manage intern applications</h1>
      <form>
        <label>First Name</label>
        <label>Name</label>
        <label>Last Name</label>
        <label>Name</label>
        <label>Department</label>
        <label>Depart</label>
        <label>Description</label>
        <label>Desc</label>
        <label>Status</label>
        
        <select>
          <option value="selected">Selected</option>
          <option value="rejected">Rejected</option>
        </select>
        <input
          type="submit"
          className="blogs-add-submit-btn"
          placeholder="Submit"
        />
      </form>
    </div>
  );
}

export default Internships
