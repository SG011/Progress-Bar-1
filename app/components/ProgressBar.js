"use client";

import { useState, useEffect } from 'react';

export default function ProgressBar({ 
  value = 0, 
  max = 100, 
  height = 8, 
  color = "bg-blue-500", 
  backgroundColor = "bg-gray-200",
  animated = true,
  showPercentage = true,
  className = "",
}) {
  const [progress, setProgress] = useState(value);
  
  // Update progress when value prop changes
  useEffect(() => {
    setProgress(value);
  }, [value]);

  // Calculate percentage
  const percentage = Math.min(100, Math.max(0, (progress / max) * 100));
  
  return (
    <div className={`w-full ${className}`}>
      <div 
        className={`w-full ${backgroundColor} rounded-full overflow-hidden`} 
        style={{ height: `${height}px` }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax={max}
      >
        <div 
          className={`h-full ${color} ${animated ? 'transition-all duration-300 ease-in-out' : ''}`} 
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showPercentage && (
        <div className="text-xs mt-1 text-right">
          {Math.round(percentage)}%
        </div>
      )}
    </div>
  );
}
