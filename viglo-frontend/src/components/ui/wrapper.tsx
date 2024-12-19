import React from "react";

interface WrapperProps {
  children: React.ReactNode;
  className?: string; // Option to pass custom classes
}

const Wrapper: React.FC<WrapperProps> = ({ children, className = "" }) => {
  return (
    <div className={`flex flex-col p-4 flex-grow ${className}`}>{children}</div>
  );
};

export default Wrapper;
