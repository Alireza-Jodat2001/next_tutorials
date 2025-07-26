'use client';

import { useEffect, useState } from 'react';

const page = () => {
  const [message, setMessage] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch('/api/ping');
      const { message } = await response.json();
      setMessage(message);
    })();
  }, []);

  return <div>{message}</div>;
};

export default page;
