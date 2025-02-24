import React, { useState } from "react";
import styles from "./AddPeople.module.css";

const AddPeople = ({ onAddPerson }) => {
  const [name, setName] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("");
  const [birthyear, setBirthyear] = useState("");

  const handleAddPerson = () => {
    if (!name.trim() || !height.trim() || !gender.trim() || !birthyear.trim()) {
      alert("Please fill in all fields");
      return;
    }

    const newPerson = {
      id: Date.now(),
      name: name.trim(),
      height: height.trim(),
      gender: gender.trim(),
      birthyear: birthyear.trim(),
    };

    console.log(newPerson);
    onAddPerson(newPerson);

    // Clear input fields
    setName("");
    setHeight("");
    setGender("");
    setBirthyear("");
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Height"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <input
        type="text"
        placeholder="Gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      />
      <input
        type="text"
        placeholder="Birth Year"
        value={birthyear}
        onChange={(e) => setBirthyear(e.target.value)}
      />
      <button onClick={handleAddPerson}>Add Person</button>
    </div>
  );
};

export default AddPeople;
