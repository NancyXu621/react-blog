// ApiPage.tsx
import React, { useEffect, useState } from "react";

const ApiPage: React.FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    // Make API request here
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>API Data</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default ApiPage;
