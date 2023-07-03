import React from "react";

interface PasswordToggleProps {
showPassword: boolean;
handlePasswordToggle: () => void;
}

const PasswordToggle: React.FC<PasswordToggleProps> = ({
showPassword,
handlePasswordToggle,
}) => {
return (
    <button
    type="button"
    className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600"
    onClick={handlePasswordToggle}
    >
    {showPassword ? (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
          className="w-5 h-5"
        >
        <path d="M12 6l9 9M6 6l9 9"></path>
        </svg>
    ) : (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
          className="w-5 h-5"
        >
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M17.6 17.6L12 12"></path>
        <path d="M12 7.7V4.5C14.7 5.1 17 7.3 17 10c0 1-.2 2.1-.5 3"></path>
        </svg>
    )}
    </button>
);
};

export default PasswordToggle;
