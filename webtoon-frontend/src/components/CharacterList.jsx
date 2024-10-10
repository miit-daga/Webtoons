//eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import { fetchCharacters } from '../api';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const loadCharacters = async () => {
      const data = await fetchCharacters();
      setCharacters(data);
    };
    loadCharacters();
  }, []);

  return (
    <div className="character-list">
      <h2>Characters</h2>
      <div className="character-grid">
        {characters.map((character) => (
          <div key={character._id} className="card character-card">
            <h3>{character.name}</h3>
            <p><strong>Role:</strong> {character.role}</p>
            <p>{character.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
