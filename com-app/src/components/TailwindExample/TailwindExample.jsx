import React from "react";
import Background from "./Background";

export default function TailwindExample() {
  return (
    <div class="bg-gray-700" style={{ height: 800 }}>
      <div style={{ height: 100 }}>
        <div style={{ height: "inherit" }} class="bg-sky-500/100 ..."></div>
        <div style={{ height: "inherit" }} class="bg-sky-500/75 ..."></div>
        <div style={{ height: "inherit" }} class="bg-sky-500/50 ..."></div>
      </div>
    </div>
  );
}
