import React from "react";

interface ErrorAlertProps {
  children: React.ReactNode;
}

const ErrorAlert: React.FC<ErrorAlertProps> = ({ children }) => {
  return (
    <div className="bg-red-600 text-white p-4 rounded-md text-center">
      {children}
    </div>
  );
};

export default ErrorAlert;
