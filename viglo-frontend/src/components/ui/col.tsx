// components/Column.tsx
import React from "react";

interface Colprops {
  children: React.ReactNode;
  size?: string; // Define column size using Tailwind CSS classes (like `w-1/2`, `w-full`, etc.)
  className?: string;
}

const Col: React.FC<Colprops> = ({
  children,
  size = "w-full",
  className = "",
}) => {
  return (
    <div className={` flex flex-col grow p-2 ${size} ${className}`}>
      {children}
    </div>
  );
};

export default Col;
