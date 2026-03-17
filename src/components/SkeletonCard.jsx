import React from "react";

const heights = [
  "h-40",
  "h-52",
  "h-60",
  "h-72",
  "h-80"
];

const SkeletonCard = () => {
  const randomHeight = heights[Math.floor(Math.random() * heights.length)];

  return (
    <div className="w-full rounded overflow-hidden bg-gray-800 animate-pulse mb-4 break-inside-avoid">
      
      <div className={`w-full ${randomHeight} bg-gray-700 rounded`} />

      <div className="p-2 flex justify-between items-center">
        <div className="w-2/3 h-4 bg-gray-600 rounded"></div>
        <div className="w-16 h-7 bg-gray-600 rounded"></div>
      </div>

    </div>
  );
};

export default SkeletonCard;