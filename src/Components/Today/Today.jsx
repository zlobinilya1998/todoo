import "./Today.css";

import React from "react";

export default function Today() {
  return (
    <div className="tooDoo-day">
      <strong>Сегодня </strong>
      <p>
        {new Date().toLocaleDateString([], {
          weekday: "short",
          day: "numeric",
          month: "short",
        })}
      </p>
    </div>
  );
}
