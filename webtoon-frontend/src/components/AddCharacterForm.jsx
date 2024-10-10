// eslint-disable-next-line
import React, { useState } from 'react';
import { addCharacter } from '../api';

const AddCharacterForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      await addCharacter({ name, description, role });
      setSuccess('Character added successfully!');
      setName('');
      setDescription('');
      setRole('');
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError('Unauthorized. Please login.');
      } else {
        setError('Failed to add character. Please try again.');
      }
    }
  };

  return (
    <div className="add-character-form card">
      <h2>Add Character</h2>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Character Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role</label>
          <input
            type="text"
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn">Add Character</button>
      </form>
    </div>
  );
};

export default AddCharacterForm;
