import React, { useState } from "react";

function NewPlantForm({ plants, setPlants }) {
  const [plantFormState, setPlantFormState] = useState({
    name: "",
    image: "",
    price: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plantFormState),
    })
      .then((r) => r.json())
      // .then(setPlants);
      .then((plantData) => {
        const newPlants = [...plants, plantData];
        setPlants(newPlants);
        setPlantFormState({ name: "", image: "", price: "" });
      });
  }

  function updateFormState(e) {
    const updatedFormState = { ...plantFormState };
    updatedFormState[e.target.name] =
      e.target.name === "price" ? parseFloat(e.target.value) : e.target.value;
    setPlantFormState(updatedFormState);
    console.log(updatedFormState);
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={plantFormState.name}
          placeholder="Plant name"
          onChange={updateFormState}
        />
        <input
          type="text"
          name="image"
          value={plantFormState.image}
          placeholder="Image URL"
          onChange={updateFormState}
        />
        <input
          type="number"
          name="price"
          value={plantFormState.price}
          step="0.01"
          placeholder="Price"
          onChange={updateFormState}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
