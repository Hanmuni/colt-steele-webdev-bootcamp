import { useState, useEffect } from "react";

const URL = "https://dog.ceo/api/breeds/image/random";

export default function RandomDog() {
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchDog = async () => {
    setLoading(true);

    // artificial delay so I can see Loading...
    await new Promise((resolve) => setTimeout(resolve, 1200));

    const res = await fetch(URL);
    const data = await res.json();
    setImg(data.message);

    setLoading(false);
  };

  useEffect(() => {
    // code you want to run AFTER React renders (side effects)
    fetchDog();
    console.log("Use effect ran!");
  }, []); // dependency list: when to run again

  return (
    <div>
      <button onClick={fetchDog}>New Dog</button>

      {loading && <p> Loading ...</p>}
      {!loading && img && <p>That's your new dog!</p>}

      {img && <img src={img} alt="Random dog" width="300" />}
    </div>
  );
}
