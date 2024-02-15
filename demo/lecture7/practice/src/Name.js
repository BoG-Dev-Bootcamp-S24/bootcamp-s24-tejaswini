import React, { useState, useEffect } from 'react';
import './App.css'; // Make sure to create this CSS file

function NameAttributesApp() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState(null);
  const [nationality, setNationality] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    console.log('useEffect')
    const fetchData = async () => {
      if (!name) return;
      setLoading(true);
      setError(null);

      try {
        const responses = await Promise.all([
          fetch(`https://api.agify.io?name=${name}`),
          fetch(`https://api.genderize.io?name=${name}`),
          fetch(`https://api.nationalize.io?name=${name}`)
        ]);

        const data = await Promise.all(responses.map(res => res.json()));

        setAge(data[0].age);
        setGender(data[1].gender);
        setNationality(data[2].country.length > 0 ? data[2].country[0].country_id : 'Unknown');
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    
    fetchData();
      
  }, [name, submit]); // Effect runs when name changes and submit is true

  return (
    <div className="app-container">
      <input
        className="name-input"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <button className="submit-button" onClick={() => setSubmit(true)}>Predict Attributes</button>

      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">Error: {error}</p>}
      <div className="results">
        {age !== null && <p>Age: {age}</p>}
        {gender && <p>Gender: {gender}</p>}
        {nationality && <p>Nationality: {nationality}</p>}
      </div>
    </div>
  );
}

export default NameAttributesApp;
