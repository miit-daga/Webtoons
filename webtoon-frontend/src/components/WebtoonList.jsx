//eslint-disable-next-line
import React, { useEffect, useState } from 'react';
import { fetchWebtoons, deleteWebtoon } from '../api'; 

const WebtoonList = () => {
  const [webtoons, setWebtoons] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadWebtoons = async () => {
      try {
        const data = await fetchWebtoons();
        setWebtoons(data);
        //eslint-disable-next-line
      } catch (err) {
        setError('Failed to load webtoons.');
      }
    };
    loadWebtoons();
  }, []);

  const handleDelete = async (id) => {
    setError('');
    try {
      await deleteWebtoon(id);
      setWebtoons(webtoons.filter((webtoon) => webtoon._id !== id));
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError('Unauthorized. Please login.');
      } else {
        setError('Failed to delete webtoon. Please try again.');
      }
    }
  };

  return (
    <div className="webtoon-list">
      <h2>Webtoons</h2>
      {error && <p className="error">{error}</p>}
      <div className="webtoon-grid">
        {webtoons.map((webtoon) => (
          <div key={webtoon._id} className="card webtoon-card">
            <h3>{webtoon.title}</h3>
            <p>{webtoon.description}</p>
            <h4>Characters:</h4>
            <ul className="character-list">
              {webtoon.characters.map((character) => (
                <li key={character._id}>{character.name}</li>
              ))}
            </ul>
            <button
              className="btn delete-btn"
              onClick={() => handleDelete(webtoon._id)}
            >
              Delete Webtoon
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebtoonList;
