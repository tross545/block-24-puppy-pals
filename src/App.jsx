import React, {useState} from 'react';
import { puppyList } from './data.js';
import "./App.css";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPupInfo = puppies.find((puppy) => puppy.id === featPupId);

  return (
    <>
      <h1>Puppy Pals</h1>
      {featPupId && <p className={"id"}>Info for Puppy with Id: {featPupId}</p>}
      {featPupId && (
        <div className={"box"}>
          <h2>{featuredPupInfo.name}</h2>
          <ul>
            <li>Age: {featuredPupInfo.age}</li>
            <li>Email: {featuredPupInfo.email}</li>
          </ul>
        </div>
      )}
      {puppies.map((puppy) => (
        <p 
        key={puppy.id} onClick={() => {
          setFeatPupId(puppy.id)}}>{puppy.name}</p>
      ))}


    </>
  );
}

export default App;
