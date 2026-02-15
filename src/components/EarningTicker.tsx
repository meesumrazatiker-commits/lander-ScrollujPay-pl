"use client";

import React, { useState, useEffect } from 'react';

const names = ['Jan', 'Anna', 'Piotr', 'Katarzyna', 'Tomasz', 'Magdalena', 'Jakub', 'Agnieszka', 'Michał', 'Ewa'];

const EarningTicker = () => {
  const [name, setName] = useState('Jan');
  const [amount, setAmount] = useState('78.00');

  useEffect(() => {
    const interval = setInterval(() => {
      setName(prevName => {
        let newName = prevName;
        while (newName === prevName) {
          newName = names[Math.floor(Math.random() * names.length)];
        }
        return newName;
      });
      const randomAmount = ((Math.random() * 30 + 5) * 4).toFixed(2);
      setAmount(randomAmount);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-4 flex items-center bg-white rounded-full p-2 shadow-md border border-gray-200">
      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">zł</div>
      <div className="ml-3 text-left">
        <p className="text-sm font-semibold text-gray-800">{name} zarobił/a właśnie <span className="text-purple-600 font-bold">{amount} zł</span></p>
      </div>
    </div>
  );
};

export default EarningTicker;
