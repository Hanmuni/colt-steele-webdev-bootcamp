import { useState, useEffect } from "react";

export default function RandomDogBreed() {
  const [breed, setBreed] = useState("husky");
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchDog = async () => {
    setLoading(true);

    // artificial delay so I can see Loading...
    await new Promise((resolve) => setTimeout(resolve, 1200));

    const URL = `https://dog.ceo/api/breed/${breed}/images/random`;
    const res = await fetch(URL);
    const data = await res.json();
    setImg(data.message);

    setLoading(false);
  };

  useEffect(() => {
    fetchDog();
    console.log("useEffect ran because breed changed:", breed);
  }, [breed]); // re-run effect whenever breed changes

  return (
    <div>
      <select value={breed} onChange={(e) => setBreed(e.target.value)}>
        <option value="husky">husky</option>
        <option value="retriever">retriever</option>
        <option value="dalmatian">dalmatian</option>
        <option value="pug">pug</option>
      </select>

      <button onClick={fetchDog}>New Dog</button>
      <p>
        Current breed: <b>{breed}</b>
      </p>

      {loading && <p>Loading ...</p>}
      {!loading && img && <p>That's your new dog!</p>}

      {img && <img src={img} alt="Random dog" width="300" />}
    </div>
  );
}
