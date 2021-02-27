import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, setPlants }) {
  const [searchQuery, setSearchQuery] = useState("");
  console.log("plant page", plants);
  return (
    <main>
      <NewPlantForm setPlants={setPlants} plants={plants} />
      <Search setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
      <PlantList
        plants={plants.filter((plant) =>
          plant.name.toLowerCase().includes(searchQuery.toLowerCase())
        )}
      />
    </main>
  );
}

export default PlantPage;
