import React, { useState } from 'react';
import './jobapply.css';
import JobApplyForm from './jobform';
import JobPositions from './jobdescrition';

function JobDescription() {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="job-description-container">
      <JobPositions setShowDescription={setShowDescription} />

      {showDescription && (
        <div className="job-requirements">
          <h4>Job Requirements</h4>
          <ul>
            <li><strong>Gender Preference:</strong> Male or Female candidates are welcome to apply.</li>
            <li><strong>Driving Knowledge:</strong> A valid driver’s license and the ability to drive is required.</li>
            <li><strong>Educational Qualifications:</strong>
              <ul>
                <li>GCE Ordinary Level (O/L): Must have passed the GCE O/L exams.</li>
                <li>GCE Advanced Level (A/L): Preference will be given to candidates who have completed the GCE A/L exams.</li>
              </ul>
            </li>
            <li><strong>Experience:</strong> A minimum of one year of experience in the marketing field is required.</li>
          </ul>
          <button className="close-btn" onClick={() => setShowDescription(false)}>Close</button>
        </div>
      )}

      <JobApplyForm />
    </div>
  );
}

export default JobDescription;
