import React from 'react';
import './jobdescription.css';

function JobPositions({ setShowDescription }) {
  const jobs = [
    { title: 'Marketing Associate', type: 'Full-Time/Part-Time', location: 'Sri Lanka' },
    // Add more job listings as needed
  ];

  return (
    <div className="job-positions-container">
      <h2>Open Positions</h2>
      <table className="job-positions-table">
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Job Type</th>
            <th>Location</th>
            <th>Requirment</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => (
            <tr key={index}>
              <td>{job.title}</td>
              <td>{job.type}</td>
              <td>{job.location}</td>
              <td>
                <button 
                  className="apply-btn" 
                  onClick={() => setShowDescription(true)}
                >
                  Show
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default JobPositions;
