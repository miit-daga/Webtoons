//eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import { addWebtoon, fetchCharacters } from '../api';
import { useNavigate } from 'react-router-dom';

const AddWebtoonForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [characters, setCharacters] = useState([]);
  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const loadCharacters = async () => {
      try {
        const data = await fetchCharacters();
        setCharacters(data);
        //eslint-disable-next-line
      } catch (err) {
        setError('Failed to load characters');
      }
    };
    loadCharacters();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const newWebtoon = { title, description, characters: selectedCharacters };
    try {
      await addWebtoon(newWebtoon);
      setTitle('');
      setDescription('');
      setSelectedCharacters([]);
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError('Unauthorized. Please login.');
        setTimeout(() => {
          navigate('/login'); 
        }, 2000);
      } else {
        setError('Failed to add Webtoon. Please try again.'); 
      }
    }
  };

  return (
    <div className="add-webtoon-form card">
      <h2>Add Webtoon</h2>
      {error && <p className="error">{error}</p>} {/* Display error message */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
          <label htmlFor="characters">Characters</label>
          <select
            multiple
            id="characters"
            value={selectedCharacters}
            onChange={(e) =>
              setSelectedCharacters([...e.target.selectedOptions].map((o) => o.value))
            }
          >
            {characters.map((character) => (
              <option key={character._id} value={character._id}>
                {character.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn">Add Webtoon</button>
      </form>
    </div>
  );
};

export default AddWebtoonForm;
