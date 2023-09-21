import React, { useEffect } from 'react';

export default function Thank() {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Redirect to the new route after 5 seconds
      window.location.href = "./home";
    }, 1500);
    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);
  return <h1>Thank you, I will get back to you shortly</h1>
}



// function handleSubmit