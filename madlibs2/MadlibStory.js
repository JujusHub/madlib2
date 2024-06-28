// src/components/MadlibStory.js
import React from 'react';

const MadlibStory = ({ formData }) => {
  const { noun, verb, adjective, adverb } = formData;

  return (
    <div>
      <h2>Your Madlib Story</h2>
      <p>
        Once upon a time, there was a {adjective} {noun} who loved to {verb}{' '}
        {adverb}.
      </p>
    </div>
  );
};

export default MadlibStory;
