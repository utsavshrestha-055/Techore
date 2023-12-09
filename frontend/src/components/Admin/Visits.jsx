import React from 'react'

const Visits = () => {
  return (
    <div className="admin-appointments">
      <h1>Here you can manage visits</h1>
      <form>
        <label>Client's Full Name</label>

        <label>Department</label>
        <label>Project Name</label>
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

export default Visits
