import React from 'react'

const RatingsBtn = ({label, onClick, isSelected}) => {
    const getEmoji = (label) => {
        switch (label.toLowerCase()) {
            case "chill":
                return "🥳";
            case "daring":
                return "⚡";
            case "extreme":
                return "🔥";
            default:
                return "🤔"; // Default emoji
        }
    };
    return (
        <button 
        onClick={onClick} 
        className={`text-[1.5rem] px-6 py-1.5 rounded-full font-semibold transition-all duration-300 shadow-md 
            ${isSelected
                ? "bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-lg"
                : "bg-gradient-to-r from-orange-400 to-pink-500 text-white hover:from-yellow-400 hover:to-red-500"
            } 
            dark:${isSelected
                ? "bg-gradient-to-r from-teal-500 to-cyan-600 text-black"
                : "bg-gradient-to-t from-purple-600 to-blue-600 text-white hover:from-indigo-500 hover:to-purple-500"
        }`}>
            <span className="mr-2">
            {getEmoji(label)}
            </span>
            {label}
        </button>
    )
}

export default RatingsBtn