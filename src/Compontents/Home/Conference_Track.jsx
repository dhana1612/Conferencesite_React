import React from 'react';

const conferenceTopics = [
  "Artificial Intelligence and Machine Learning",
  "Cloud Computing and Virtualization",
  "Big Data Analytics and Data Mining",
  "Computer Networks and Security",
  "Internet of Things (IoT)",
  "Blockchain Technology",
  "Cybersecurity and Privacy",
  "Software Engineering",
  "Mobile Computing",
  "Distributed Systems"
];

const ConferenceTracks = () => {
  return (
    <div className="pb-5" style={{
      background: 'linear-gradient(to bottom, #f9f7f6, #eaf2fb)',
    }}>
      <div className="container">
        {/* Section heading with larger font */}
        <h5 className="text-uppercase text-primary fw-bold py-5" style={{ fontSize: '1.70rem' }}>
          Conference Tracks
        </h5>

        <div className="row g-3">
          {conferenceTopics.map((topic, index) => (
            <div className="col-md-6" key={index}>
              {/* Card with increased font size */}
              <div
                className="bg-white rounded shadow-sm px-4 py-4 text-center"
                style={{
                  fontWeight: 600,
                  color: '#2d2d4f',
                  border: '1px solid #f0f0f0',
                  fontSize: '1.25rem'  // Increased font size
                }}
              >
                {topic}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConferenceTracks;
