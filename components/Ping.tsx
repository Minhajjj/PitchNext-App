import React from 'react'

// components/Ping.tsx
const Ping = () => {
  return (
    <div className="absolute -top-1 -right-1">
      <span className="flex h-[10px] w-[10px] relative">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75">
        </span>
        <span className="relative inline-flex rounded-full h-full w-full bg-red-500">
        </span>
      </span>
    </div>
  );
};


export default Ping 