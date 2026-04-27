import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://xcountries-backend.labs.crio.do/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return(
    <div className='container'>
      {countries.map((country, index) => (
        <div className='card' key={index}>
          <img src={country.flag} alt={country.name} />
          <p>{country.name}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
