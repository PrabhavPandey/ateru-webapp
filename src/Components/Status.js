import React, { useEffect } from "react";

function Status({ data, updateProjects }) {
  useEffect(() => {
    const interval = setInterval(() => {
      statusCheck();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const statusCheck = async () => {
    const fetchData = await fetch(
      `https://staging.api.edo2net.tzkt.io/v1/operations/${data.recentHash}`
    );

    const jsonData = await fetchData.json();

    if (jsonData.length > 0) {
      updateProjects(data, jsonData[0].status, null, jsonData);
    }
  };

  return <div className="pending">Submitting Donation...</div>;
}

export default Status;
