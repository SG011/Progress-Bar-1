"use client";

import { useState, useEffect } from 'react';
import ProgressBar from '../components/ProgressBar';
import Link from 'next/link';

export default function ProgressBarPage() {
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(30);
  const [progress3, setProgress3] = useState(60);
  const [progress4, setProgress4] = useState(0);

  // Simulate progress for the animated example
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress1((prevProgress) => {
        const newProgress = prevProgress + 1;
        return newProgress > 100 ? 0 : newProgress;
      });
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  // Simulate progress for the manual control example
  const handleIncrement = () => {
    setProgress4((prev) => Math.min(prev + 10, 100));
  };

  const handleDecrement = () => {
    setProgress4((prev) => Math.max(prev - 10, 0));
  };

  const handleReset = () => {
    setProgress4(0);
  };

  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto">
      <Link href="/" className="text-blue-500 hover:underline mb-8 inline-block">
        &larr; Back to Home
      </Link>
      
      <h1 className="text-3xl font-bold mb-8">Progress Bar Examples</h1>
      
      <div className="space-y-12">
        {/* Example 1: Basic progress bar with animation */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Animated Progress</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            This progress bar automatically animates from 0 to 100%.
          </p>
          <ProgressBar value={progress1} />
        </div>

        {/* Example 2: Custom styled progress bar */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Custom Styled</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            A progress bar with custom height, color, and no percentage display.
          </p>
          <ProgressBar 
            value={progress2} 
            height={12} 
            color="bg-green-500" 
            backgroundColor="bg-green-100"
            showPercentage={false}
          />
        </div>

        {/* Example 3: Gradient progress bar */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Gradient Style</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            A progress bar with a gradient background.
          </p>
          <ProgressBar 
            value={progress3} 
            height={16} 
            color="bg-gradient-to-r from-purple-500 to-pink-500" 
            backgroundColor="bg-gray-100"
          />
        </div>

        {/* Example 4: Interactive progress bar with controls */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Interactive Controls</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            Control the progress with buttons.
          </p>
          <ProgressBar 
            value={progress4} 
            height={10} 
            color="bg-blue-600" 
          />
          <div className="flex gap-2 mt-4">
            <button 
              onClick={handleDecrement}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              -10%
            </button>
            <button 
              onClick={handleReset}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
            >
              Reset
            </button>
            <button 
              onClick={handleIncrement}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
            >
              +10%
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
