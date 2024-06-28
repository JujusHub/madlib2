// src/components/MadlibForm.js
import React from 'react';

const MadlibForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Noun:
          <input
            type="text"
            name="noun"
            value={formData.noun}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Verb:
          <input
            type="text"
            name="verb"
            value={formData.verb}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Adjective:
          <input
            type="text"
            name="adjective"
            value={formData.adjective}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Adverb:
          <input
            type="text"
            name="adverb"
            value={formData.adverb}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MadlibForm;
