import React, { useState, useEffect } from "react";
import "./Header.css";

export default function Header() {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      // Get day and format it
      const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const dayOfWeek = daysOfWeek[now.getDay()];

      // Get date and format it
      const date = now.toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      // Get time and format it
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const time = `${hours}:${minutes.toString().padStart(2, "0")}`;

      // Update state with formatted date, day, and time
      setCurrentDateTime(`${dayOfWeek}, ${date} ${time}`);
    };

    updateDateTime(); // Set initial date, day, and time

    // Update date, day, and time every minute
    const interval = setInterval(updateDateTime, 60000);

    // Clean up interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="header-div">
      <h3>{currentDateTime}</h3>
    </div>
  );
}
